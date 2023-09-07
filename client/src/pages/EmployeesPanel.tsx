import { Container, Grid } from '@mui/material'
import { type Employee } from '../types/Employee'
import EmployeeCard from '../components/employee/card/EmployeeCard'
import TitledBox from '../components/shared/TitledBox'
import { useEmployeeList } from '../hooks/useEmployeeList'

const EmployeesPanel = () => {
  const employeeList = useEmployeeList()

  return (
    <Container>
      <Grid container rowSpacing={3} sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <TitledBox title={'Employees Panel'}/>
        {
          employeeList.map((employee: Employee) => (
            <Grid item md={8} key={employee.id}>
              <EmployeeCard employee={employee}/>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default EmployeesPanel
