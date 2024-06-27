
FROM postgres:latest


COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_PASSWORD=password

EXPOSE 5432
