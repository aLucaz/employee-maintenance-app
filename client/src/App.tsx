import EmployeesPanel from './pages/EmployeesPanel'
import { useEffect, useState } from 'react'
import axios from './helper/axios-config'
import { EmployeeContext } from './context/employee-context'
import { type Employee } from './types/Employee'

function App () {
  const [employeeList, setEmployeeList] = useState<Employee[]>([])

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

  useEffect(() => {
    const controller = new AbortController()
    void axios.get('/employee', { signal: controller.signal })
      .then((res) => {
        console.log(res.data)
        setEmployeeList(res.data)
      }).catch((error) => {
        if (error.name === 'CanceledError') {
          console.log('Request was', error.message)
        } else {
          console.error('Request failed:', error.message)
        }
      })
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <EmployeeContext.Provider value={{ employeeList, updateEmployeeById, getEmployeeById }}>
        <EmployeesPanel/>
      </EmployeeContext.Provider>
    </>
  )
}

export default App
