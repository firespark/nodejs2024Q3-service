FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]