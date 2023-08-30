class EmployeeQueries {
  CREATE = `
    INSERT INTO employee (first_name, last_name, hire_date, phone, address) 
    VALUES (:firstName, :lastName, :hireDate, :phone, :address)`;

  DELETE = `
    DELETE FROM employee
    WHERE id = :id
  `;

  GET_BY_ID = `
    SELECT * 
    FROM employee 
    WHERE id = :id
  `;

  GET_ALL = `
    SELECT * 
    FROM employee
    ORDER BY id;
  `;

  UPDATE = `
    UPDATE employee
    SET first_name = :firstName, 
        last_name = :lastName,
        phone = :phone,
        address = :address,
        hire_date = :hireDate
    WHERE id = :id;
  `;
}

export default new EmployeeQueries();
