import { type Employee } from '../../../types/Employee'
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EmployeeModalAvatar from './EmployeeModalAvatar'
import EmployeePersonalInfoBox from './EmployeePersonalInfoBox'
import EmployeeHiringInfo from './EmployeeHiringInfo'
import EmployeeDepartmentHistory from './EmployeeDepartmentHistory'

interface Props {
  employee: Employee
  openDetails: boolean
  handleClose: () => void
}

function EmployeeDetailsModal ({ employee, openDetails, handleClose }: Props) {
  return (
    <>
      <Dialog
        onClose={handleClose}
        open={openDetails}
        fullWidth
        maxWidth={'md'}
      >
        <DialogTitle>
          Employee Details
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Stack direction={'row'} columnGap={5} justifyContent={'center'}>
            <EmployeeModalAvatar
              photo={employee.photo}
              isActive={employee.isActive}
            />
            <EmployeePersonalInfoBox {...employee}/>
            <EmployeeHiringInfo
              id={employee.id}
              isActive={employee.isActive}
              formattedHireDate={employee.formattedHireDate}
              hireDuration={employee.hireDuration}
            />
          </Stack>
          <Divider/>
          <EmployeeDepartmentHistory
            employeeId={employee.id}
            departmentId={employee.idDepartment}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EmployeeDetailsModal
