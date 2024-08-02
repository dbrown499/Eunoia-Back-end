DROP DATABASE IF EXISTS euphoria_app;

CREATE DATABASE euphoria_app;

\c euphoria_app;


CREATE TABLE clothes (
   id SERIAL PRIMARY KEY,
   type_of_clothing TEXT NOT NULL,
  size  TEXT NOT NULL,
  price DECIMAL NOT NULL,
  stock INTEGER,
  season_collection VARCHAR(6) NOT NULL,
  description TEXT,
  last_updated_on DATE NOT NULL DEFAULT CURRENT_DATE
);