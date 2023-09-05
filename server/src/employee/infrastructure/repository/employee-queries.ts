class EmployeeQueries {
  CREATE = `
    INSERT INTO employee (first_name, last_name, hire_date, phone, address, photo)
    VALUES ($1, $2, $3, $4, $5, $6) 
    RETURNING
      first_name AS "firstName",
      last_name AS "lastName",
      hire_date AS "hireDate",
      phone,
      address,
      photo,
      is_active AS "isActive"
  `;

  DELETE = `
    DELETE FROM employee
    WHERE id = :id
  `;

  GET_BY_ID = `
    SELECT 
      e.id,
      e.first_name AS "firstName",
      e.last_name AS "lastName",
      e.hire_date AS "hireDate",
      e.phone,
      e.address,
      e.photo,
      e.is_active AS "isActive",
      d.name AS department,
      d.id AS "idDepartment"
    FROM employee AS e
    INNER JOIN employee_in_department eid on e.id = eid.id_employee
    INNER JOIN department d on d.id = eid.id_department
    WHERE e.id = :id AND
          eid.is_active = true
  `;

  GET_BY_NAME_PHONE = `
    SELECT id
    FROM employee 
    WHERE first_name = :firstName AND
          last_name = :lastName AND
          phone = :phone
  `;

  GET_ALL = `
    SELECT
      e.id,
      e.first_name AS "firstName",
      e.last_name AS "lastName",
      e.hire_date AS "hireDate",
      e.phone,
      e.address,
      e.photo,
      e.is_active AS "isActive",
      d.name AS department,
      d.id AS "idDepartment"
    FROM employee AS e
    INNER JOIN employee_in_department eid on e.id = eid.id_employee
    INNER JOIN department d on d.id = eid.id_department
    WHERE eid.is_active = true
    ORDER BY id
  `;

  UPDATE = `
    UPDATE employee
    SET :updates
    WHERE id = :id
    RETURNING
      first_name AS "firstName",
      last_name AS "lastName",
      hire_date AS "hireDate",
      phone,
      address,
      photo,
      is_active AS "isActive"
  `;
}

export default new EmployeeQueries();
