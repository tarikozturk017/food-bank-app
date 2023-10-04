CREATE DATABASE foodbankapp;

CREATE TABLE foodbank(
    foodbank_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    address VARCHAR(255)
);