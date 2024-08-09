CREATE TABLE bank_customer
(
    id SMALLINT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    phone_no VARCHAR(10) NOT NULL unique,
    age INT NOT NULL,
    address VARCHAR(30) NOT NULL
);

CREATE TABLE Account
(
 id          smallint ,
 type       varchar(30) NOT NULL ,
 balance     decimal(16,2) NOT NULL ,
 customer_id smallint NOT NULL ,
 branch_id   smallint NOT NULL ,
 CONSTRAINT PK_Account PRIMARY KEY (id ),
 CONSTRAINT FK_Account_Customer FOREIGN KEY (customer_id)  REFERENCES bankcustomer(id),
 CONSTRAINT FK_Account_Branches FOREIGN KEY (branch_id)  REFERENCES branches(id),
 CONSTRAINT check_unique_customer unique(customer_id,branch_id) 
);

CREATE TABLE branches
(
 id       smallint ,
 name    varchar(30) NOT NULL ,
 location varchar(30) NOT NULL ,
 CONSTRAINT PK_Branch PRIMARY KEY CLUSTERED (id)
);