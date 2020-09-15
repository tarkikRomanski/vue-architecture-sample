FROM node:12.18

COPY entrypoint.sh /usr/local/bin/
WORKDIR /app/src

RUN ["chmod", "+x", "/usr/local/bin/entrypoint.sh"]
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
