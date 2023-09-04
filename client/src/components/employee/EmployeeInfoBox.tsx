import { type Employee } from '../../types/Employee'
import { Box, CardContent, Grid, Typography } from '@mui/material'

function EmployeeInfoBox (employee: Employee) {
  return (
    <>
      <Grid item md={8}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${employee.firstName} ${employee.lastName} (${employee.department})`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hire Date
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${employee.formattedHireDate} (${employee.hireDuration?.years}y - ${employee.hireDuration?.months}m - ${employee.hireDuration?.days}d)`}
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </>
  )
}

export default EmployeeInfoBox
