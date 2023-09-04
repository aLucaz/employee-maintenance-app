FROM node:18.17.1-alpine
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "preview" ]
