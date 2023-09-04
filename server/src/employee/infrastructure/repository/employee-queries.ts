class EmployeeQueries {
  CREATE = `
    INSERT INTO employee (first_name, last_name, hire_date, phone, address, photo) 
    VALUES (:firstName, :lastName, :hireDate, :phone, :address, :photo)`;

  DELETE = `
    DELETE FROM employee
    WHERE id = :id
  `;

  GET_BY_ID = `
    SELECT e.*, d.name AS department, d.id AS "idDepartment"
    FROM employee AS e
    INNER JOIN employee_in_department eid on e.id = eid.id_employee
    INNER JOIN department d on d.id = eid.id_department
    WHERE e.id = :id AND
          eid.is_active = true
  `;

  GET_BY_NAME_PHONE = `
    SELECT * 
    FROM employee 
    WHERE first_name = :firstName AND
          last_name = :lastName AND
          phone = :phone
  `;

  GET_ALL = `
    SELECT e.*, d.name AS department, d.id AS "idDepartment"
    FROM employee AS e
    INNER JOIN employee_in_department eid on e.id = eid.id_employee
    INNER JOIN department d on d.id = eid.id_department
    WHERE eid.is_active = true
    ORDER BY id;
  `;

  UPDATE = `
    UPDATE employee
    SET :updates
    WHERE id = :id;
  `;
}

export default new EmployeeQueries();
