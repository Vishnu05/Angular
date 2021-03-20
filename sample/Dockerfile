FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY ./ ./
RUN npm install

RUN npm install -g @angular/cli

RUN npm install -g http-server

RUN ng build --prod


