import { useContext } from 'react'
import { EmployeeContext } from '../providers/EmployeeProvider'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUpdateEmployeeById = () => {
  const { updateEmployeeById } = useContext(EmployeeContext)
  return updateEmployeeById
}
