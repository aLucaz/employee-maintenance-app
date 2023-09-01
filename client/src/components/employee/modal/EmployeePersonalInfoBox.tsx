import { type Employee } from '../../../types/Employee'
import { Paper, Typography } from '@mui/material'

function EmployeePersonalInfoBox (employee: Partial<Employee>) {
  return (
    <Paper sx={{ padding: '1vh' }} elevation={0}>
      <Typography gutterBottom variant="h6" component="div">
        {`${employee.firstName} ${employee.lastName}`}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Employee ID: {employee.id}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Department: {employee.department}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Telephone: {employee.phone}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Address: {employee.address}
      </Typography>
    </Paper>
  )
}

export default EmployeePersonalInfoBox
