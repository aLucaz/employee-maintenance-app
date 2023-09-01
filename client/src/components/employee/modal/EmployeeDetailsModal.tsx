import { type Employee } from '../../../types/Employee'
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EmployeeModalAvatar from '../EmployeeModalAvatar'
import EmployeePersonalInfoBox from './EmployeePersonalInfoBox'
import EmployeeHiringInfo from './EmployeeHiringInfo'

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
        <DialogContent>
          <Stack direction={'row'} columnGap={1}>
            <EmployeeModalAvatar
              photo={employee.photo}
              isActive={employee.isActive}
            />
            <EmployeePersonalInfoBox {...employee}/>
            <EmployeeHiringInfo
              isActive={employee.isActive}
              formattedHireDate={employee.formattedHireDate}
              hireDuration={employee.hireDuration}
            />
          </Stack>
          <Divider/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EmployeeDetailsModal
