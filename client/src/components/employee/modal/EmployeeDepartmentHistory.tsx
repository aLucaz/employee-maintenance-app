import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from '../../../helper/axios-config'
import { useEffect, useState } from 'react'

interface History {
  id: number
  startDate: string
  endDate: string
  idDepartment: number
  departmentName: string
}

function EmployeeDepartmentHistory ({ employeeId, departmentId }: { employeeId: number, departmentId: number }) {
  const [history, setHistory] = useState<History[]>([])

  useEffect(() => {
    const controller = new AbortController()
    void axios.get(`/department/history/${employeeId}`, { signal: controller.signal })
      .then((res) => {
        console.log(res.data)
        setHistory(res.data)
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
  }, [departmentId])

  return (
    <Box sx={{ marginTop: '2vh' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.departmentName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default EmployeeDepartmentHistory
