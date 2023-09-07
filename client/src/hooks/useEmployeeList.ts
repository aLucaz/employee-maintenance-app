import { useContext } from 'react'
import { type Employee } from '../types/Employee'
import { EmployeeContext } from '../providers/EmployeeProvider'

export const useEmployeeList = (): Employee[] => {
  const { employeeList } = useContext(EmployeeContext)
  return employeeList
}
