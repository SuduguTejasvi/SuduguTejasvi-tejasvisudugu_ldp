-- module 3 creation of table with constraints
-- departments table
CREATE TABLE departments (
    department_id smallint AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL UNIQUE,
    location VARCHAR(100) NOT NULL
);
-- employee table
CREATE TABLE employee (
    eid SMALLINT AUTO_INCREMENT PRIMARY KEY,
    ename VARCHAR(30) NOT NULL UNIQUE,
    city VARCHAR(12),
    country VARCHAR(15) DEFAULT 'India',
    department_id smallint,
    CONSTRAINT chk_city CHECK (city IN ('Hyderabad', 'Chennai', 'Pune')),
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE SET NULL
);