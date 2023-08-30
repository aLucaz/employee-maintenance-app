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

  GET_BY_NAME_PHONE = `
    SELECT * 
    FROM employee 
    WHERE first_name = :firstName AND
          last_name = :lastName AND
          phone = :phone
  `;

  GET_ALL = `
    SELECT * 
    FROM employee
    ORDER BY id;
  `;

  UPDATE = `
    UPDATE employee
    SET :updates
    WHERE id = :id;
  `;
}

export default new EmployeeQueries();
