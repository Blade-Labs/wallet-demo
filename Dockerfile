FROM node:16.14.0-alpine AS builder
WORKDIR /home/node/wallet-demo
COPY ./package.json /home/node/wallet-demo
RUN npm -g i pnpm && pnpm i
COPY . .
RUN pnpm build

FROM nginx:1.21-alpine
COPY --from=builder /home/node/wallet-demo/dist/ /usr/share/nginx/html

COPY --from=builder /home/node/wallet-demo/nginx/nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
