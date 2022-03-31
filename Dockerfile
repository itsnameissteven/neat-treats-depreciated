# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:14 as build-stage

WORKDIR /app

COPY package.json yarn.lock ./ 

RUN yarn install --frozen-lockfile

COPY ./ /app/

RUN yarn build-storybook

EXPOSE 3000

ENV PORT 3000

CMD ["node", "express.js"]

# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build-stage /app/build/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

