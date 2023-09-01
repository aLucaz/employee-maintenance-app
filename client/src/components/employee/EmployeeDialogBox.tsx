import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import { type Employee } from '../../types/Employee'
import EmployeeDetailsModal from './modal/EmployeeDetailsModal'

function EmployeeDialogBox (employee: Employee) {
  const [openDetails, setOpenDetails] = useState(false)

  const handleOpen = () => {
    setOpenDetails(true)
  }

  const handleClose = () => {
    setOpenDetails(false)
  }

  return (
    <>
      <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" color="info" onClick={handleOpen}>
          View Details
        </Button>
        <EmployeeDetailsModal employee={employee} handleClose={handleClose} openDetails={openDetails}/>
      </Grid>
    </>
  )
}

export default EmployeeDialogBox
