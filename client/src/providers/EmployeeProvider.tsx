import { createContext } from 'react'
import { type Employee } from '../types/Employee'
import { useDataLoader } from '../hooks/useDataLoader'
import Routes from '../lib/axios/routes'

interface EmployeeContextType {
  employeeList: Employee[]
  updateEmployeeById: (id: number, updatedEmployee: Employee) => void
  getEmployeeById: (id: number) => Employee | undefined
}

const initialEmployeeContext = {
  employeeList: [],
  updateEmployeeById: () => {},
  getEmployeeById: () => undefined
}

export const EmployeeContext = createContext<EmployeeContextType>(
  initialEmployeeContext
)

interface ChildrenProps { children: React.ReactNode }

const EmployeeProvider: React.FC<ChildrenProps> = ({
  children
}: ChildrenProps) => {
  const [employeeList, setEmployeeList] = useDataLoader<Employee>(Routes.GET_EMPLOYEE_LIST_URL)

  const updateEmployeeById = (id: number, updatedEmployee: Employee) => {
    setEmployeeList((prevEmployees: Employee[]) =>
      prevEmployees.map((employee: Employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    )
  }

  const getEmployeeById = (id: number) => employeeList.find((employee) => employee.id === id)

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        updateEmployeeById,
        getEmployeeById
      }}
    >
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
