FROM node:16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

# RUN yarn run build-storybook

# COPY . .

EXPOSE 3000

CMD ["yarn", "server"]
