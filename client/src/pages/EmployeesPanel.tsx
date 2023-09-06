import { Container, Grid } from '@mui/material'
import { type Employee } from '../types/Employee'
import EmployeeCard from '../components/employee/card/EmployeeCard'
import TitledBox from '../components/shared/TitledBox'
import { useContext } from 'react'
import { EmployeeContext } from '../context/employee-context'

function EmployeesPanel () {
  const { employeeList } = useContext(EmployeeContext)

  return (
    <Container>
      <Grid container rowSpacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <TitledBox title={'Employees Panel'}/>
        {
          employeeList.map((employee: Employee) => (
            <Grid item md={8} key={employee.id}>
              <EmployeeCard {...employee}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default EmployeesPanel
