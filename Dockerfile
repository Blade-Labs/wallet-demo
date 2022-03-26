FROM node:16 as demo-app-build
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
WORKDIR /usr/src/app
COPY ./ ./
RUN pnpm i && pnpm build
EXPOSE 3001
CMD ["pnpm", "serve"]