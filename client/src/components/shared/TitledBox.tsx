import { Box, Typography } from '@mui/material'

function TitledBox ({ title }: { title: string }) {
  return (
    <>
      <Box sx={{ minHeight: '15vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >
        <Typography variant={'h4'} component={'div'}>{title}</Typography>
      </Box>
    </>
  )
}

export default TitledBox
