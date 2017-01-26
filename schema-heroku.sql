USE xtd7crs4r9jpmz75;

CREATE TABLE Burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured boolean NOT NULL DEFAULT false,
    CustomerId int,
    devouredBy int,
    createdAt timestamp NOT NULL DEFAULT current_timestamp,
    updatedAt timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

CREATE TABLE Customers (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    createdAt timestamp NOT NULL DEFAULT current_timestamp,
    updatedAt timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);
