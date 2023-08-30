const script = `
CREATE TABLE IF NOT EXISTS employee (
    id serial primary key,
    first_name varchar(20) not null,
    last_name varchar(20) not null,
    hire_date timestamp not null,
    phone varchar(12),
    address varchar(50),
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
    start_date timestamp not null,
    end_date timestamp,
    is_active boolean,
    CONSTRAINT unique_employee_department_start UNIQUE (id_employee, id_department, start_date)
);

-- inserting 10 random employees
INSERT INTO employee (first_name, last_name, hire_date, phone, address)
VALUES
    ('John', 'Doe', '2022-01-01 10:00:00', '1234567890', '123 Main St'),
    ('Jane', 'Smith', '2022-02-01 11:00:00', '9876543210', '456 Elm St'),
    ('Michael', 'Johnson', '2022-03-01 09:00:00', '5555555555', '789 Oak St'),
    ('Emily', 'Williams', '2022-04-01 08:00:00', '1112223333', '567 Pine St'),
    ('Daniel', 'Brown', '2022-05-01 12:00:00', '4445556666', '890 Maple St'),
    ('Jessica', 'Jones', '2022-06-01 14:00:00', '7778889999', '234 Birch St'),
    ('William', 'Davis', '2022-07-01 13:00:00', '3334445555', '456 Cedar St'),
    ('Sophia', 'Miller', '2022-08-01 16:00:00', '6667778888', '789 Walnut St'),
    ('James', 'Moore', '2022-09-01 10:30:00', '2223334444', '345 Oak St'),
    ('Olivia', 'Taylor', '2022-10-01 15:30:00', '8889990000', '567 Elm St')
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
    (1, 1, '2022-01-01 10:00:00', NULL, true),
    (2, 2, '2022-02-01 11:00:00', NULL, true),
    (3, 3, '2022-03-01 09:00:00', NULL, true),
    (4, 4, '2022-04-01 08:00:00', NULL, true),
    (5, 5, '2022-05-01 12:00:00', NULL, true),
    (6, 1, '2022-06-01 14:00:00', NULL, true),
    (7, 2, '2022-07-01 13:00:00', NULL, true),
    (8, 3, '2022-08-01 16:00:00', NULL, true),
    (9, 4, '2022-09-01 10:30:00', NULL, true),
    (10, 5, '2022-10-01 15:30:00', NULL, true)
ON CONFLICT DO NOTHING;
`;

export default script;
