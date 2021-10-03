version: '3.8'
services:
 app:
   build:
     context: .
   ports:
     - 80:3000
#   environment:
#     - SERVER_PORT=8080
#     - DATABASE_CONNECTIONSTRING=mongodb://mongo:27017/notes
#   volumes:
#     - ./:/usr/src/app
#   command: npm run debug
ubuntu@ip-172-31-5-20:~/comp229-assignment1$ cat Dockerfile
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
