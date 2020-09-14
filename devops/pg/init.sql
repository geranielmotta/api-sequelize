CREATE USER jestexemples_app WITH ENCRYPTED PASSWORD 'teste';

CREATE DATABASE jestexemplesdb;

GRANT ALL PRIVILEGES ON DATABASE jestexemplesdb TO jestexemples_app;

CREATE SCHEMA IF NOT EXISTS jestexemples_app AUTHORIZATION jestexemples_app;
