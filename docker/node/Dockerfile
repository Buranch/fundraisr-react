FROM node:8.11.3

MAINTAINER Kalpa Perera <kalpa.lkm@gmail.com>

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/* \
    && apt-get -y autoclean

RUN npm install -g yarn

RUN mkdir -p /var/www/html

RUN chown -R www-data: /var/www
RUN chmod 755 /var/www

EXPOSE 3000

WORKDIR /var/www/html
