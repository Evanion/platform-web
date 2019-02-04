# Stage 1
FROM node:10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock .env config ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2
FROM nginx:1.12-alpine
ENV DEPLOY_ENVIRONMENT=stage;
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/config/${DEPLOY_ENVIRONMENT}.proxy.conf /etc/nginx/conf.d/proxy.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]