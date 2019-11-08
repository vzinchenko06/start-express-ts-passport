FROM node:10.14.0 as nodemodules
WORKDIR /app
COPY package.json .
COPY package-lock.json* .
RUN npm install


FROM node:10.14.0
ARG PORT
ARG NODE_ENV
ARG DB_URL
ARG JWT_KEY
EXPOSE ${PORT}

RUN mkdir /app
WORKDIR /app
COPY --from=nodemodules /app /app
COPY . /app
RUN cd /app
RUN npm run build
RUN npm install -g pm2
RUN npm install -g sequelize-cli
#CMD pm2-runtime pm2.ecs.api.config.json