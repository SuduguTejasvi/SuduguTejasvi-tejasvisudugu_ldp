CREATE TABLE hotel_customer
(
    id             SMALLINT,
    name           VARCHAR(30) NOT NULL,
    phone_no        VARCHAR(10) UNIQUE NOT NULL,
    customer_type   VARCHAR(30) NOT NULL,
    hotel_id       SMALLINT NOT NULL,
    CONSTRAINT PK_Customer PRIMARY KEY  (id ),
    CONSTRAINT FK_Customer_Hotel FOREIGN KEY (hotel_id) REFERENCES hotel(id),
    CONSTRAINT chk_CustomerType CHECK (customer_type IN ('FirstTime', 'Loyal'))
);


CREATE TABLE hotel
(
    id         SMALLINT ,
    name       VARCHAR(20) NOT NULL,
    Location   VARCHAR(20) NOT NULL,
    Rating     VARCHAR(20) NOT NULL,
    Capacity   INT NOT NULL,
    CONSTRAINT PK_Hotel PRIMARY KEY (Id)
);



