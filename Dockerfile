FROM node:16
##ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
##--production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
##RUN chown -R node /usr/src/app
##USER node
CMD [ "node", "server.js" ]
