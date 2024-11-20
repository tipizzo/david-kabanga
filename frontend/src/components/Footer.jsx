import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ margin: '40px', display: "flex", justifyContent: "center", position: "fixed", right: "30px" }}>
        <Typography sx={{ fontWeight: "bold" }}>
            David K. &copy; 2024
        </Typography>
    </Box>
  )
}

export default Footer
