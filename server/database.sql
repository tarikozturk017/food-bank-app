CREATE DATABASE foodbankapp;

CREATE TABLE foodbank (
    foodbank_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    apt_number INTEGER,
    street VARCHAR(255),
    city VARCHAR(255),
    province VARCHAR(255),
    postal_code VARCHAR(255),
    phone VARCHAR(255)
);