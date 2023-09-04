import { createContext } from 'react'
import { type Employee } from '../types/Employee'

interface EmployeeContextType {
  employeeList: Employee[]
  updateEmployeeById: (id: number, updatedEmployee: Employee) => void
  getEmployeeById: (id: number) => Employee | undefined
}

export const EmployeeContext = createContext<EmployeeContextType>({
  employeeList: [],
  updateEmployeeById: () => {},
  getEmployeeById: () => undefined
})
