import { Button, FormControl, FormHelperText, MenuItem, Select, Stack, type SelectChangeEvent } from '@mui/material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../../../context/employee-context'

interface Department {
  id: number
  name: string
}

interface Props {
  currIdEmployee: number
  currIdDepartment: number
}

function EmployeeDepartmentSelect ({ currIdEmployee, currIdDepartment }: Props) {
  const [departmentList, setDepartmentList] = useState([{ id: 0, name: '' }])
  const [newIdDepartment, setNewIdDepartment] = useState(0)
  const { updateEmployeeById } = useContext(EmployeeContext)

  const handleChange = (event: SelectChangeEvent) => {
    setNewIdDepartment(parseInt(event.target.value))
  }

  const handleUpdate = () => {
    axios.put('/department', {
      idEmployee: currIdEmployee,
      idDepartment: newIdDepartment
    }).then((res) => {
      console.log(JSON.stringify(res.data, null, 2))
      updateEmployeeById(currIdEmployee, res.data)
    }).catch((error) => {
      console.error('Request failed:', error.message)
    })
  }

  useEffect(() => {
    const controller = new AbortController()
    void axios.get('/department', { signal: controller.signal })
      .then((res) => {
        setNewIdDepartment(currIdDepartment)
        setDepartmentList(res.data)
      }).catch((error) => {
        if (error.name === 'CanceledError') {
          console.log('Request was', error.message)
        } else {
          console.error('Request failed:', error.message)
        }
      })
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <Stack sx={{ marginTop: '1vh' }} direction={'row'} columnGap={1} alignItems={'start'}>
      <FormControl>
        <Select
          value={newIdDepartment.toString()}
          onChange={handleChange}
          sx={{ height: '4vh', width: '15vw' }}
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
