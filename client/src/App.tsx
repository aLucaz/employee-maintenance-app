import EmployeesPanel from './pages/EmployeesPanel'
import { EmployeeContext } from './context/employee-context'
import { type Employee } from './types/Employee'
import useDataLoader from './hooks/use-data-loader'
import './helper/axios-config'

function App () {
  const [employeeList, setEmployeeList] = useDataLoader<Employee>('/employee')

  const updateEmployeeById = (id: number, updatedEmployee: Employee) => {
    setEmployeeList((prevEmployees) => {
      return prevEmployees.map(employee =>
        employee.id === id ? updatedEmployee : employee
      )
    })
  }

  const getEmployeeById = (id: number) => {
    return employeeList.find((employee) => employee.id === id)
  }

  return (
    <>
      <EmployeeContext.Provider value={{ employeeList, updateEmployeeById, getEmployeeById }}>
        <EmployeesPanel/>
      </EmployeeContext.Provider>
    </>
  )
}

export default App
