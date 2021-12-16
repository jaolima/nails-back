FROM node:latest

RUN npm i && npm run build

COPY build .

RUN ["npm start"]