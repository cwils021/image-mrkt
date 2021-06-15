FROM node:14.16.1

RUN mkdir app

WORKDIR /app/

EXPOSE 3000

COPY yarn.lock /app/

COPY package.json /app/

RUN yarn install

COPY . .

STOPSIGNAL SIGINT

CMD ["yarn", "start"]
