CREATE TABLE customer
(	
	id      SMALLINT ,
    name    VARCHAR(20) NOT NULL,
    PhoneNo VARCHAR(15) NOT NULL unique,
    Email   VARCHAR(30) unique,
    Age     INT NOT NULL,
    CONSTRAINT PK_Customer PRIMARY KEY (Id) 
);

CREATE TABLE ticket
(
    id          SMALLINT ,
    status      VARCHAR(20) NOT NULL,
    ticket_id   SMALLINT ,
    customer_id SMALLINT NOT NULL,
    CONSTRAINT PK_Ticket PRIMARY KEY (id),
    CONSTRAINT FK_Ticket_Customer FOREIGN KEY (customer_id) REFERENCES customer(id),
    CONSTRAINT FK_Ticket_Train FOREIGN KEY (ticket_id) REFERENCES train(id),
    CONSTRAINT unique_customer_ticket UNIQUE (customer_id, ticket_id),
    CONSTRAINT check_ticket_status CHECK (Status IN ('Reserved', 'Unreserved'))
);

CREATE TABLE train
(
    id             SMALLINT ,
    name           VARCHAR(50) NOT NULL,
    source         VARCHAR(50) NOT NULL,
    destination    VARCHAR(50) NOT NULL,
    departure_time  DATETIME NOT NULL,
    arrival_time    DATETIME NOT NULL,
    capacity       INT NOT NULL,
    CONSTRAINT PK_Train PRIMARY KEY  (id )
);

