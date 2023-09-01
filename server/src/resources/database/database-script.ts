const script = `
CREATE TABLE IF NOT EXISTS employee (
    id serial primary key,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    hire_date date not null,
    phone varchar(12),
    address varchar(50),
    photo varchar(50),
    is_active boolean,
    CONSTRAINT unique_name_phone UNIQUE (first_name, last_name, phone)
);

CREATE TABLE IF NOT EXISTS department (
    id serial primary key,
    name varchar(25) unique not null
);

CREATE TABLE IF NOT EXISTS employee_in_department (
    id serial primary key,
    id_employee integer references employee(id) ,
    id_department integer references department(id),
    start_date date not null,
    end_date date,
    is_active boolean,
    CONSTRAINT unique_employee_department_start UNIQUE (id_employee, id_department, start_date)
);

-- inserting 10 random employees
INSERT INTO employee (first_name, last_name, hire_date, phone, address, photo, is_active)
VALUES
    ('John', 'Doe', '2022-01-01', '1234567890', '123 Main St', 'https://robohash.org/John', true),
    ('Jane', 'Smith', '2022-02-01', '9876543210', '456 Elm St', 'https://robohash.org/Jane', true),
    ('Michael', 'Johnson', '2022-03-01', '5555555555', '789 Oak St', 'https://robohash.org/Michael', true),
    ('Emily', 'Williams', '2022-04-01', '1112223333', '567 Pine St', 'https://robohash.org/Emily', true),
    ('Daniel', 'Brown', '2022-05-01', '4445556666', '890 Maple St', 'https://robohash.org/Daniel', true),
    ('Jessica', 'Jones', '2022-06-01', '7778889999', '234 Birch St', 'https://robohash.org/Jessica', true),
    ('William', 'Davis', '2022-07-01', '3334445555', '456 Cedar St', 'https://robohash.org/William', true),
    ('Sophia', 'Miller', '2022-08-01', '6667778888', '789 Walnut St', 'https://robohash.org/Sophia', true),
    ('James', 'Moore', '2022-09-01', '2223334444', '345 Oak St', 'https://robohash.org/James', true),
    ('Olivia', 'Taylor', '2022-10-01', '8889990000', '567 Elm St', 'https://robohash.org/Olivia', true)
ON CONFLICT DO NOTHING;

INSERT INTO department (name)
VALUES
    ('HR'),
    ('IT'),
    ('Finance'),
    ('Marketing'),
    ('Sales')
ON CONFLICT DO NOTHING;

-- associating employees with departments
INSERT INTO employee_in_department (id_employee, id_department, start_date, end_date, is_active)
VALUES
    (1, 1, '2022-01-01', NULL, true),
    (2, 2, '2022-02-01', NULL, true),
    (3, 3, '2022-03-01', NULL, true),
    (4, 4, '2022-04-01', NULL, true),
    (5, 5, '2022-05-01', NULL, true),
    (6, 1, '2022-06-01', NULL, true),
    (7, 2, '2022-07-01', NULL, true),
    (8, 3, '2022-08-01', NULL, true),
    (9, 4, '2022-09-01', NULL, true),
    (10, 5, '2022-10-01', NULL, true)
ON CONFLICT DO NOTHING;
`;

export default script;
