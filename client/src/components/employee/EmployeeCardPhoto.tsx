import { CardMedia } from '@mui/material'

function EmployeeCardPhoto ({ photo }: { photo: string }) {
  return (
    <>
      <CardMedia
        component={'img'}
        image={photo}
        sx={{
          height: '15vh',
          width: '15vw',
          margin: '5px'
        }}
      />
    </>
  )
}

export default EmployeeCardPhoto
