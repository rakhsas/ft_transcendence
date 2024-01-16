FROM node:20.10.0

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install Next.js and other dependencies
RUN npm install
# RUN npm install -g @nestjs/cli
# CMD ["tail", "-f", "/dev/null"]
# RUN nest new app
# RUN npm install
COPY . .
# EXPOSE 3000
CMD ["npm", "run", "start"]
# CMD ["npm", "run", "start:dev"]
# WORKDIR /app/app
# CMD ["ls", "-l"]
# CMD ["pwd"]

