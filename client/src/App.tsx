import EmployeesPanel from './pages/EmployeesPanel'
import { useEffect, useState } from 'react'
import axios from './helper/axios-config'

function App () {
  const [employeeList, setEmployeeList] = useState([])

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
      <EmployeesPanel employeeList={employeeList}/>
    </>
  )
}

export default App
