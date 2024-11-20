import React from 'react'
import { AppBar, styled, Toolbar, Typography, Box} from '@mui/material'
import { Message } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Icons = styled(Box)(({ theme }) => {
    cursor: "pointer"
})

const Navbar = () => {
  return (
    <Box sx={{ marginBottom: "65px" }}>
        <AppBar position='fixed'>
            <StyledToolbar>
                <Typography 
                    variant='h5'
                    sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer", fontWeight: "bold"}} >
                    DAVID K.
                </Typography>
                <Typography
                     variant='h6'
                     sx={{ display: {xs: "block", sm: "none"}, cursor: "ponter" }}  >
                    D K.
                </Typography>
                <Icons>
                    <Message />
                </Icons>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
