FROM node:22-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

USER appuser

CMD ["npm", "run", "dev"]