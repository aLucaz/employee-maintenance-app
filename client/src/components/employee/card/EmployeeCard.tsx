import { Card, Grid } from '@mui/material'
import EmployeeDialogBox from './EmployeeDialogBox'
import EmployeeCardPhoto from './EmployeeCardPhoto'
import EmployeeInfoBox from './EmployeeInfoBox'
import { type Employee } from '../../../types/Employee'

interface EmployeeCardProps {
  employee: Employee
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }: EmployeeCardProps) => (
  <Card sx={{
    height: {
      xs: '25vh',
      md: '20vh'
    },
    display: 'flex',
    alignItems: 'center'
  }}>
    <EmployeeCardPhoto photo={employee.photo}/>
    <Grid container sx={{
      justifyContent: 'start'
    }}>
      <EmployeeInfoBox employee={employee}/>
      <EmployeeDialogBox employee={employee}/>
    </Grid>
  </Card>
)

export default EmployeeCard
