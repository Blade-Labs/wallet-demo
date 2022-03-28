FROM node:16 as demo-app-build
WORKDIR /usr/src/app
COPY ./ ./
RUN npm -g i pnpm && pnpm i && pnpm build
EXPOSE 4173
CMD ["pnpm", "serve"]