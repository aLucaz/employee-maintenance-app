import { Button, Paper, Typography } from '@mui/material'
import { type Employee } from '../../../types/Employee'

const buttonStyles = {
  deactivate: {
    backgroundColor: 'red',
    color: 'white',
    padding: 0.5,
    width: '8vw',
    marginTop: '1vh'
  },
  activate: {
    backgroundColor: 'green',
    color: 'white',
    padding: 0.5,
    width: '8vw',
    marginTop: '1vh'
  }
}

function EmployeeHiringInfo (employee: Pick<Employee, 'formattedHireDate' | 'hireDuration' | 'isActive'>) {
  return (
    <Paper elevation={0} sx={{ padding: '1vh' }}>
      <Typography variant="body1">
        Hire Date
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {employee.formattedHireDate}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {`${employee.hireDuration?.years}y - ${employee.hireDuration?.months}m - ${employee.hireDuration?.days}d`}
      </Typography>
      <Button sx={employee.isActive ? buttonStyles.deactivate : buttonStyles.activate } size={'small'}>
        {employee.isActive ? 'Deactivate' : 'Activate'}
      </Button>
    </Paper>
  )
}

export default EmployeeHiringInfo
