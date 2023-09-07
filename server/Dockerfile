# install
FROM node:18.17.1-alpine AS install
WORKDIR /app
COPY package*.json .
RUN yarn install

# build
FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY --from=install /app/node_modules ./node_modules
COPY . .
RUN yarn build

# run
FROM node:18.17.1 AS run
WORKDIR /app
COPY package*.json .
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 8000
CMD [ "node", "dist/app.js" ]
