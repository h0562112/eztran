FROM node:18.18.2 as builder
WORKDIR /app
COPY . /app
RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build
ENV \
  NUXT_HOST="0.0.0.0" \
  NUXT_PORT="3000" \
  NODE_ENV="production"

CMD ["yarn", "start"]
