import { CardMedia, styled } from '@mui/material'

const EmployeeCardMedia = styled(CardMedia)(() => ({
  height: '15vh',
  width: '15vh',
  padding: '1vh'
}))

interface EmployeeCardPhotoProps {
  photo: string
}

const EmployeeCardPhoto: React.FC<EmployeeCardPhotoProps> = (
  { photo }: EmployeeCardPhotoProps
) => <EmployeeCardMedia image={photo}/>

export default EmployeeCardPhoto
