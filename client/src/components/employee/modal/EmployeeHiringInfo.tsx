import { Button, Paper, Typography } from '@mui/material'
import { type Employee } from '../../../types/Employee'
import axios from 'axios'
import { useUpdateEmployeeById } from '../../../hooks/useUpdateEmployeeById'
import Routes from '../../../lib/axios/routes'

const buttonStyles = {
  deactivate: {
    backgroundColor: 'red',
    color: 'white',
    padding: 0.5,
    width: {
      sm: '15vw',
      md: '10vw'
    },
    marginTop: '1vh',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white'
    }
  },
  activate: {
    backgroundColor: 'green',
    color: 'white',
    padding: 0.5,
    width: {
      sm: '15vw',
      md: '10vw'
    },
    marginTop: '1vh',
    '&:hover': {
      backgroundColor: 'green',
      color: 'white'
    }
  }
}

interface EmployeeHiringInfoProps {
  employee: Employee
}

const EmployeeHiringInfo: React.FC<EmployeeHiringInfoProps> = (
  { employee }: EmployeeHiringInfoProps
) => {
  const updateEmployeeById = useUpdateEmployeeById()

  const handleClick = () => {
    const isActive = !employee.isActive
    axios.put(`${Routes.UPDATE_EMPLOYEE_BY_ID}/${employee.id}`, {
      isActive
    }).then(() => {
      updateEmployeeById(employee.id, { ...employee, isActive })
    }).catch((error) => {
      console.error('Request failed:', error.message)
    })
  }

  return (
    <Paper elevation={0} sx={{ padding: '1vh' }}>
      <Typography variant="body1">
        Hire Date
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {employee.formattedHireDate}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {employee.hireDuration?.years}y - {' '}
        {employee.hireDuration?.months}m - {' '}
        {employee.hireDuration?.days}d
      </Typography>
      <Button
        onClick={handleClick}
        sx={employee.isActive ? buttonStyles.deactivate : buttonStyles.activate }
        size={'small'}
      >
        {employee.isActive ? 'Deactivate' : 'Activate'}
      </Button>
    </Paper>
  )
}

export default EmployeeHiringInfo
