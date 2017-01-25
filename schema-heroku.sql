USE wp433upk59nnhpoh;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured boolean NOT NULL DEFAULT false,
    date timestamp NOT NULL DEFAULT NOW(),
    createdAt timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("Veggie patty with mushrooms and cabbage");
INSERT INTO burgers (burger_name) VALUES ('Tempeh burger with BBQ sauce and grilled onions');
INSERT INTO burgers (burger_name) VALUES ('Portabello burger with roasted red peppers and garlic');