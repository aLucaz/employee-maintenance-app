import { Avatar, Box, Stack, styled } from '@mui/material'

interface Props {
  photo: string
  isActive: boolean
}

const EmployeeAvatar = styled(Avatar)(() => ({
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
  }
}))

const MessageBox = styled(Box)({
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
  borderRadius: '15vh'
})

function EmployeeModalAvatar ({ photo, isActive }: Props) {
  return (
    <Box>
      <Stack direction="column" rowGap={1} sx={{ alignItems: 'center', padding: '1vh' }} >
        <EmployeeAvatar src={photo} />
        {
          isActive
            ? ''
            : <MessageBox> Inactive </MessageBox>
        }
      </Stack>
    </Box>
  )
}

export default EmployeeModalAvatar
