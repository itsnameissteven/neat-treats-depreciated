# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14 as deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install 

FROM node:14 AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build-storybook
# COPY ./ /app/

FROM node:14 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs

COPY --from=builder /app/storybook-static ./storybook-static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "express.js"]

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

