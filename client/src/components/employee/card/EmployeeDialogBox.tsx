import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import { type Employee } from '../../../types/Employee'
import EmployeeDetailsModal from '../modal/EmployeeDetailsModal'

interface EmployeeDialogBoxProps {
  employee: Employee
}

const EmployeeDialogBox: React.FC<EmployeeDialogBoxProps> = (
  { employee }: EmployeeDialogBoxProps
) => {
  const [openDetails, setOpenDetails] = useState(false)

  const handleOpen = () => {
    setOpenDetails(true)
  }

  const handleClose = () => {
    setOpenDetails(false)
  }

  return (
    <Grid item md={3} sm={12} sx={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: '2vh'
    }}>
      <Button variant="contained" onClick={handleOpen}>
        View Details
      </Button>
      <EmployeeDetailsModal
        openDetails={openDetails}
        handleClose={handleClose}
        employee={employee}
      />
    </Grid>
  )
}

export default EmployeeDialogBox
