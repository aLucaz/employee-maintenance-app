import { Container, Grid } from '@mui/material'
import { type Employee } from '../types/Employee'
import EmployeeCard from '../components/employee/EmployeeCard'
import TitledBox from '../components/shared/TitledBox'

function EmployeesPanel ({ employeeList }: { employeeList: Employee[] }) {
  return (
    <>
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
    </>
  )
}

export default EmployeesPanel
