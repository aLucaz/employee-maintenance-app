# install
FROM node:18.17.1-alpine AS install
WORKDIR /app
COPY package*.json /app
RUN yarn install
COPY . .

# build
FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY package*.json /app
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN yarn build

# run
FROM node:18.17.1 AS run
COPY --from=build app/package*.json .
COPY --from=build app/node_modules ./node_modules
COPY --from=build app/dist ./dist
COPY .env .env
EXPOSE 3000
CMD [ "node", "dist/app.js" ]
