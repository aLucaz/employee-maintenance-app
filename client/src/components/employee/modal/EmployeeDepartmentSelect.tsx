import { Button, FormControl, FormHelperText, MenuItem, Select, Stack, type SelectChangeEvent } from '@mui/material'
import axios from 'axios'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../../../context/employee-context'
import useDataLoader from '../../../hooks/use-data-loader'

interface Department {
  id: number
  name: string
}

interface Props {
  currIdEmployee: number
  currIdDepartment: number
}

function EmployeeDepartmentSelect ({ currIdEmployee, currIdDepartment }: Props) {
  const [departmentList] = useDataLoader<Department>('/department')
  const [newIdDepartment, setNewIdDepartment] = useState(currIdDepartment)
  const { updateEmployeeById } = useContext(EmployeeContext)

  const handleChange = (event: SelectChangeEvent) => {
    setNewIdDepartment(parseInt(event.target.value))
  }

  const handleUpdate = () => {
    axios.put('/department', {
      idEmployee: currIdEmployee,
      idDepartment: newIdDepartment
    }).then((res) => {
      updateEmployeeById(currIdEmployee, res.data)
    }).catch((error) => {
      console.error('Request failed:', error.message)
    })
  }

  return (
    <Stack columnGap={1} sx={{
      marginTop: '1vh',
      flexDirection: 'row',
      alignItems: 'start'
    }}>
      {
        departmentList.length > 0 &&
        <FormControl>
          <Select
            value={newIdDepartment.toString()}
            onChange={handleChange}
            sx={{
              height: '4vh',
              width: {
                sm: '20vw',
                md: '15vw'
              }
            }}
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

export default EmployeeDepartmentSelect
