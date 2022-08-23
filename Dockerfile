FROM node:latest

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "start"]