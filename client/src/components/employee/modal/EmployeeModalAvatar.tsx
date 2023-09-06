import { Avatar, Box, Stack, styled } from '@mui/material'

interface Props {
  photo: string
  isActive: boolean
}

const EmployeeAvatar = styled(Avatar)(({ theme }) => ({
  width: '11vw',
  height: '11vw',
  border: '2px solid gray',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  [theme.breakpoints.down('sm')]: {
    width: '25vw',
    height: '25vw'
  }
}))

const MessageBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#DC143C',
  color: '#ffffff',
  padding: '0.5vh',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.5vh',
  width: '10vw',
  border: '1px solid gray',
  borderRadius: '15vh',
  [theme.breakpoints.down('sm')]: {
    width: '25vw',
    height: '4vw'
  }
}))

function EmployeeModalAvatar ({ photo, isActive }: Props) {
  return (
    <Stack sx={{ alignItems: 'center', padding: '1vh' }} rowGap={1} >
      <EmployeeAvatar src={photo} />
      {
        isActive
          ? ''
          : <MessageBox> Inactive </MessageBox>
      }
    </Stack>
  )
}

export default EmployeeModalAvatar
