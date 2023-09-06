import { type Employee } from '../../../types/Employee'
import { Paper, Typography } from '@mui/material'
import EmployeeDepartmentUpdateSection from './EmployeeDepartmentUpdateSection'

type EmployeeProps = Pick<Employee, 'firstName' | 'lastName' | 'id' | 'department' | 'idDepartment' | 'phone' | 'address'>

function EmployeePersonalInfoBox (employee: EmployeeProps) {
  return (
    <Paper sx={{ minWidth: '15vw', padding: '1vh' }} elevation={0}>
      <Typography gutterBottom variant="h6" component="div" sx={{ textDecoration: 'underline' }}>
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

      <Typography sx={{ textDecoration: 'underline', marginTop: '2vh' }}>
        Update Department
      </Typography>
      <EmployeeDepartmentUpdateSection
        currIdEmployee={employee.id}
        currIdDepartment={employee.idDepartment}
      />
    </Paper>
  )
}

export default EmployeePersonalInfoBox
