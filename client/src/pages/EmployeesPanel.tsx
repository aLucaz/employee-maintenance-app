import { Box, Container, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { type Employee } from '../types/Employee'
import EmployeeCard from '../components/employee/EmployeeCard'
import axios from '../helper/axios-config'

function EmployeesPanel () {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    void axios.get('/employee', { signal: controller.signal })
      .then((res) => {
        console.log(res.data)
        setEmployeeList(res.data)
      })
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ minHeight: '15vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >
            <Typography variant={'h4'} component={'div'}>Employees Panel</Typography>
          </Box>
          {
            employeeList.map((emp: Employee) => (
              <Grid item md={8} key={emp.id}>
                <EmployeeCard
                  id={emp.id}
                  firstName={emp.firstName}
                  lastName={emp.lastName}
                  hireDate={emp.hireDate}
                  phone={emp.phone}
                  photo={emp.photo}
                  address={emp.address}
                  department={emp.department}
                  formattedHireDate={emp.formattedHireDate}
                  hireDuration={emp.hireDuration}
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default EmployeesPanel
