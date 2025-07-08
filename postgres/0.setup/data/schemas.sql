
-- Countries table
create table country(
	id serial primary key,
	country text not null unique,
	short_code varchar(2) unique,
	mobile_code varchar(5)
);


-- Data Export countries.csv file data


-- Capitals
create table capital(
	id serial primary key,
	country text not null unique,
	capital text
);


-- Data Export capitals.csv file data

-- Flag table
create table flag(
	id serial primary key,
	--country text references country(country),
	country text,
	flag text
);

-- Data: Export flags.csv file data



-- world food table
create table world_food (
	country text not null unique,
	rice NUMERIC(10,2),
	wheat NUMERIC(10,2)
);

-- DATA: Export world-food.csv file data




-- Users table
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(15) UNIQUE NOT NULL,
	color VARCHAR(15)
);

-- Data
INSERT INTO users (name, color)
VALUES ('Angela', 'teal'), ('Jack', 'powderblue');



-- Visited countries
CREATE TABLE visited_countries(
id SERIAL,
country_code CHAR(2) NOT NULL,
user_id INTEGER REFERENCES users(id),
PRIMARY KEY (country_code, user_id)
);

-- Data
INSERT INTO visited_countries (country_code, user_id)
VALUES ('FR', 1), ('GB', 1), ('CA', 2), ('FR', 2 );



