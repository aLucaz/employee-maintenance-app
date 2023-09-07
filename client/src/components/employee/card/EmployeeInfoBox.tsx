import { type Employee } from '../../../types/Employee'
import { Grid, Typography } from '@mui/material'

interface EmployeeInfoBoxProps {
  employee: Employee
}

const EmployeeInfoBox: React.FC<EmployeeInfoBoxProps> = ({ employee }: EmployeeInfoBoxProps) => (
  <Grid item md={7} sm={12} sx={{
    display: 'flex',
    flexDirection: 'column',
    margin: '2vh'
  }}>
    <Typography gutterBottom variant="h5" component="div">
      {employee.firstName} {employee.lastName} ({employee.department})
    </Typography>
    <Typography variant="body1" color="text.secondary">
      Hire Date
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {employee.formattedHireDate} ({employee.hireDuration?.years}y - {' '}
      {employee.hireDuration?.months}m - {employee.hireDuration?.days}d)
    </Typography>
  </Grid>
)

export default EmployeeInfoBox
