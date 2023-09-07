import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useDataLoader } from '../../../hooks/useDataLoader'
import routes from '../../../lib/axios/routes'

interface History {
  id: number
  startDate: string
  endDate: string
  idDepartment: number
  departmentName: string
}

interface EmployeeDepartmentHistoryProps {
  employeeId: number
  departmentId: number
}

const EmployeeDepartmentHistory: React.FC<EmployeeDepartmentHistoryProps> = (
  { employeeId, departmentId }: EmployeeDepartmentHistoryProps
) => {
  const [history] = useDataLoader<History>(
    `${routes.GET_EMPLOYEE_DEPARTMENT_HISTORY}/${employeeId}`, [departmentId]
  )

  return (
    <Box sx={{ marginTop: '2vh' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              history.map((row) => (
                <TableRow
                  key={row.id}
                >
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.departmentName}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default EmployeeDepartmentHistory
