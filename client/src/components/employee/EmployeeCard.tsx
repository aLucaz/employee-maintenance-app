import { type Employee } from '../../types/Employee'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

function EmployeeCard (employee: Employee) {
  return (
    <>
      <Card sx={{
        height: '20vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <CardMedia
          component={'img'}
          image={employee.photo}
          sx={{
            height: '15vh',
            width: '15vw',
            padding: '10px'
          }}
        />
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
              {`${employee.formattedHireDate} (${employee.hireDuration.years}y - ${employee.hireDuration.months}m - ${employee.hireDuration.days}d)`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default EmployeeCard
