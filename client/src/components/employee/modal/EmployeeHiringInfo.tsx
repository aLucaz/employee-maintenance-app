import { Button, Paper, Typography } from '@mui/material'
import { type Employee } from '../../../types/Employee'
import axios from 'axios'
import { useContext } from 'react'
import { EmployeeContext } from '../../../context/employee-context'

const buttonStyles = {
  deactivate: {
    backgroundColor: 'red',
    color: 'white',
    padding: 0.5,
    width: '10vw',
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
    width: '10vw',
    marginTop: '1vh',
    '&:hover': {
      backgroundColor: 'green',
      color: 'white'
    }
  }
}

type EmployeeProps = Pick<Employee, 'id' | 'formattedHireDate' | 'hireDuration' | 'isActive'>

function EmployeeHiringInfo (employee: EmployeeProps) {
  const { updateEmployeeById } = useContext(EmployeeContext)

  const handleClick = () => {
    axios.put(`/employee/${employee.id}`, {
      isActive: !employee.isActive
    }).then((res) => {
      console.log(JSON.stringify(res.data, null, 2))
      updateEmployeeById(employee.id, res.data)
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
        {`${employee.hireDuration?.years}y - ${employee.hireDuration?.months}m - ${employee.hireDuration?.days}d`}
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
