import { Box, Typography } from '@mui/material'
import React from 'react'

interface TitledBoxProps {
  title: string
}

const TitledBox: React.FC<TitledBoxProps> = ({ title }) => (
  <Box sx={{
    minHeight: '15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }} >
    <Typography variant={'h4'} component={'div'}>{title}</Typography>
  </Box>
)

export default TitledBox
