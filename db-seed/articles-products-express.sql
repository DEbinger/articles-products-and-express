DROP DATABASE IF EXISTS "articles_products_express";

CREATE DATABASE "articles_products_express" WITH OWNER "indexed_cars_user";

\c articles_products_express;


DROP TABLE IF EXISTS products;

CREATE TABLE products (

  id serial PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL);
  --created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  --updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now());

DROP TABLE IF EXISTS articles;

CREATE TABLE articles (

  id serial PRIMARY KEY NOT NULL,
  title varchar(255) NOT NULL,
  body varchar(8000) NOT NULL,
  author varchar(100) NOT NULL,
  url_title varchar(255) NOT NULL,
  created_at timestamp WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at timestamp WITH TIME ZONE NOT NULL DEFAULT now());