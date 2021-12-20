FROM node:latest

COPY . .
RUN npm i && npm run build

WORKDIR ./build
RUN npm i

CMD "npm" "run" "start"