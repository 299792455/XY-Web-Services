# Étape 1 : build de l'app Next.js
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Étape 2 : image allégée en production
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app ./
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
