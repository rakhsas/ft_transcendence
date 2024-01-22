FROM node:20.10.0

WORKDIR /app
# RUN npm config set registry https://registry.npmjs.org/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
