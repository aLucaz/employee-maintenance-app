import { Card, Grid } from '@mui/material'
import EmployeeDialogBox from './EmployeeDialogBox'
import EmployeeCardPhoto from './EmployeeCardPhoto'
import EmployeeInfoBox from './EmployeeInfoBox'
import { type Employee } from '../../types/Employee'

function EmployeeCard (employee: Employee) {
  return (
    <>
      <Card sx={{
        height: '20vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <EmployeeCardPhoto photo={employee.photo}/>
        <Grid container>
          <EmployeeInfoBox {...employee}/>
          <EmployeeDialogBox {...employee}/>
        </Grid>
      </Card>
    </>
  )
}

export default EmployeeCard
