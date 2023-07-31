

# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh


FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.15-alpine3.16
RUN apk update && apk upgrade

WORKDIR /

# RUN apk --no-cache add curl=7.83.1 -r6 && wget -q https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem && npm install

COPY package.json ./
COPY --from=newrelic /tmp/newrelic.js .

RUN  npm install

COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
