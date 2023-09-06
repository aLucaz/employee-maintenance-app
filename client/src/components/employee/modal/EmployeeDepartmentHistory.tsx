import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import useDataLoader from '../../../hooks/use-data-loader'

interface History {
  id: number
  startDate: string
  endDate: string
  idDepartment: number
  departmentName: string
}

function EmployeeDepartmentHistory ({ employeeId, departmentId }: { employeeId: number, departmentId: number }) {
  const [history] = useDataLoader<History>(`/department/history/${employeeId}`, [departmentId])

  return (
    <Box sx={{ marginTop: '2vh' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="employee history table">
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
