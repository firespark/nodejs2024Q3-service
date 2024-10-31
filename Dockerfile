FROM node:22.9-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci cache clean --force --no-optional 


COPY . .

RUN npm run build

FROM node:alpine
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "run", "start:dev"]