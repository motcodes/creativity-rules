FROM alpine:3.4

EXPOSE 80
WORKDIR /app
CMD nginx -c /nginx.conf

RUN apk add --no-cache nginx
ADD nginx.conf /
ADD . /app
