# Use the latest LTS version of Node.js
FROM node:23.9.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npm run build

CMD ["npm", "run", "dev"]