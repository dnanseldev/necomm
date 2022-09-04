#-----DEVELOPMENT ENVIRONMENT------------
FROM node:18-alpine3.15 as development

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]