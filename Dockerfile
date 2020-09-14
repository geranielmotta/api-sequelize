FROM node:alpine

ARG APP_PATH="/opt/jest-exemples"

RUN mkdir -p ${APP_PATH}

WORKDIR ${APP_PATH}

COPY . .

RUN yarn

EXPOSE 3000

ENTRYPOINT [ "yarn" , "start" ]