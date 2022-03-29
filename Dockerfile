FROM node:16.14-alpine as builder
WORKDIR /usr/src/app
COPY ./ ./
RUN npm -g i pnpm && pnpm i && pnpm build
EXPOSE 3001
CMD ["pnpm", "serve"]