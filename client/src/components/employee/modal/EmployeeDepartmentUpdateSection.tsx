import { Button, FormControl, FormHelperText, MenuItem, Select, Stack, type SelectChangeEvent } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useDataLoader } from '../../../hooks/useDataLoader'
import { useUpdateEmployeeById } from '../../../hooks/useUpdateEmployeeById'
import Routes from '../../../lib/axios/routes'

interface Department {
  id: number
  name: string
}

interface EmployeeDepartmentUpdateSectionProps {
  currIdEmployee: number
  currIdDepartment: number
}

const EmployeeDepartmentUpdateSection: React.FC<EmployeeDepartmentUpdateSectionProps> = (
  { currIdEmployee, currIdDepartment }: EmployeeDepartmentUpdateSectionProps
) => {
  const [departmentList] = useDataLoader<Department>(Routes.GET_DEPARTMENT_LIST_URL)
  const [newIdDepartment, setNewIdDepartment] = useState(currIdDepartment)
  const updateEmployeeById = useUpdateEmployeeById()

  const handleChange = (event: SelectChangeEvent) => {
    setNewIdDepartment(parseInt(event.target.value))
  }

  const handleUpdate = () => {
    axios.put(Routes.UPDATE_EMPLOYEE_DEPARTMENT_URL, {
      idEmployee: currIdEmployee,
      idDepartment: newIdDepartment
    }).then((res) => {
      updateEmployeeById(currIdEmployee, res.data)
    }).catch((error) => {
      console.error('Request failed:', error.message)
    })
  }

  return (
    <Stack columnGap={1} sx={{ marginTop: '1vh', flexDirection: 'row', alignItems: 'start' }}>
      {
        departmentList.length > 0 &&
        <FormControl>
          <Select
            value={newIdDepartment.toString()}
            onChange={handleChange}
            sx={{ height: '4vh', width: { sm: '20vw', md: '15vw' } }}
          >
            {
              departmentList.map((department: Department) => (
                <MenuItem key={department.id} value={department.id.toString()}>
                  {department.name}
                </MenuItem>
              ))
            }
          </Select>
          <FormHelperText sx={{ marginLeft: 0 }}> Select a department </FormHelperText>
        </FormControl>
      }
      <Button
        variant='contained'
        color='success'
        size='small'
        disabled={currIdDepartment === newIdDepartment}
        onClick={handleUpdate}
      >
        Update
      </Button>
    </Stack>
  )
}

export default EmployeeDepartmentUpdateSection
