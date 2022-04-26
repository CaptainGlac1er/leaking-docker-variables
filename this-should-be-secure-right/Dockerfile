FROM node:18-alpine3.14
WORKDIR /project
COPY . .
RUN npm ci
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
