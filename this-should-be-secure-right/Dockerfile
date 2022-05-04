FROM node:16-alpine3.14 as builder
WORKDIR /project
COPY . .
RUN npm ci
RUN npm run pkg

FROM alpine:3.14
WORKDIR /project
COPY --from=builder /project/out ./
COPY config.json config.json
EXPOSE 3000
ENTRYPOINT ["/project/hard-coded-secret"]
