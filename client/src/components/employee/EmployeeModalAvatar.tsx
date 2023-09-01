import { Avatar, Badge, Box, Stack, styled } from '@mui/material'

interface Props {
  photo: string
  isActive: boolean
}

const StyledAvatar = styled(Avatar)(() => ({
  width: '11vw',
  height: '15vh',
  border: '2px solid gray'
}))

function EmployeeModalAvatar ({ photo, isActive }: Props) {
  return (
    <>
      <Stack direction="column" rowGap={1} sx={{ alignItems: 'center', padding: '2vh' }} >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <StyledAvatar src={photo} />
        </Badge>
        {
          isActive
            ? ''
            : <Box
            sx={{
              bgcolor: '#338bff',
              color: '#ffffff',
              padding: 1,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '1.5vh'
            }}
          >
            Inactive
          </Box>
        }
      </Stack>
    </>
  )
}

export default EmployeeModalAvatar
