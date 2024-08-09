-- supplier table
CREATE TABLE supplier
(
    id         SMALLINT,
    name       VARCHAR(30) NOT NULL,
    phone_no    VARCHAR(10) NOT NULL unique,
    address    VARCHAR(30) NOT NULL,
    CONSTRAINT PK_Supplier PRIMARY KEY (id)
);

-- item table
CREATE TABLE item
(
    id           SMALLINT ,
    name         VARCHAR(50) NOT NULL,
    price        DECIMAL(16,2) NOT NULL,
    brand        VARCHAR(50) NOT NULL,
    supplier_id  SMALLINT NOT NULL,
    CONSTRAINT PK_Item PRIMARY KEY  (id),
    CONSTRAINT FK_Item_Supplier FOREIGN KEY (supplier_id) REFERENCES supplier(id)
);

-- order item table
CREATE TABLE order_item
(
    order_id  SMALLINT ,
    item_id   SMALLINT ,
    quantity  INT NOT NULL,
    CONSTRAINT PK_OrderItem PRIMARY KEY (order_id , item_id ),
    CONSTRAINT FK_OrderItem_Item FOREIGN KEY (item_id) REFERENCES item(id),
    CONSTRAINT FK_OrderItem_Order FOREIGN KEY (order_id) REFERENCES order(Id)
);


-- order 

CREATE TABLE order
(
    id            SMALLINT ,
    order_date     DATE NOT NULL,
    customer_id   SMALLINT NOT NULL,
    CONSTRAINT PK_OrderTable PRIMARY KEY  (id ),
    CONSTRAINT FK_OrderTable_Customer FOREIGN KEY (customer_id) REFERENCES ecommCustomer(Id)
);

-- customers table
CREATE TABLE customer
(
    id        SMALLINT NOT NULL,
    name      VARCHAR(30) NOT NULL,
    phone_no   VARCHAR(10) NOT NULL unique,
    address   VARCHAR(30) NOT NULL,
    CONSTRAINT PK_EcommCustomer PRIMARY KEY (id )
);













