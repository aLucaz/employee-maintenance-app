class DepartmentQueries {
  GET_ALL = `
    SELECT *
    FROM department
    ORDER BY name;
  `;

  DEACTIVATE_CURRENT_DEPARTMENT = `
    UPDATE employee_in_department
    SET is_active = false,
        end_date = LOCALTIMESTAMP
    WHERE id_employee = :idEmployee;
  `;

  ADD_EMPLOYEE_IN_DEPARTMENT = `
    INSERT INTO employee_in_department (id_employee, id_department, start_date, end_date, is_active)
    VALUES (:idEmployee, :idDepartment, CURRENT_DATE, null, true)
  `;

  SEARCH_EMPLOYEE_IN_DEPARTMENT = `
    SELECT *
    FROM employee_in_department
    WHERE id_employee = :idEmployee AND
          id_department = :idDepartment AND
          is_active = true;
  `;

  SEARCH_EMPLOYEE_HISTORY = `
    SELECT *
    FROM employee_in_department
    WHERE id_employee = :idEmployee
    ORDER BY start_date DESC
  `;
}

export default new DepartmentQueries();
