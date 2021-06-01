FROM node:14.16.1
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app/
ENV PORT=5000
ENV TEST_DB="${TEST_DB}"
RUN npx tsc
CMD ["yarn", "start"]
