FROM node:16
COPY ./ ./app
WORKDIR /app
RUN yarn && yarn build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf