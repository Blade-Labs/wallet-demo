FROM node:16.14-alpine AS builder
WORKDIR /home/node/wallet-demo
COPY ./package.json /home/node/wallet-demo
RUN npm -g i pnpm && pnpm i
COPY . .
RUN pnpm build

FROM node:16.14-alpine
WORKDIR /home/node/wallet-demo
RUN npm -g i pnpm
COPY --chown=node:node --from=builder /home/node/wallet-demo/ /home/node/wallet-demo/
USER node
EXPOSE 3001
CMD ["pnpm", "serve"]
