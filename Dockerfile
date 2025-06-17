# Étape 1 : build de l'app Next.js
FROM node:18-alpine AS builder
WORKDIR /app

# Copie le code et l'env local
COPY . .
COPY .env.local .env.local

# Install + build
RUN npm install
RUN npm run build

# Étape 2 : image allégée en production
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production

# Récupère depuis builder
COPY --from=builder /app ./

# Installe sans les dépendances de dev
RUN npm install --omit=dev

# Supprime le .env.local pour éviter qu’il reste dans l’image finale
RUN rm .env.local

EXPOSE 3000
CMD ["npm", "start"]
