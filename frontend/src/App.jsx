import React from 'react'
import { Box, Stack } from '@mui/material'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Feeds from './components/Feeds'
import Rightbar from './components/rightbar'


const App = () => {
  return (
    <Box >
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-around">
        <Sidebar />
        <Feeds />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
