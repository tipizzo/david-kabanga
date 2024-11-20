import { GitHub, Info, Javascript, LinkedIn, Twitter, Verified, X } from '@mui/icons-material'
import { styled, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Card, CardMedia, CardContent, CardActions, Typography, Button, Avatar, IconButton } from '@mui/material'
import React from 'react'
import quote from '../assets/quote.jpg'
import profile from '../assets/profile.jpeg'

const AvatarStyle = styled(Avatar)({
    position: "relative",
    bottom: "35px",
    left: "10px",
    height: "70px",
    width: "70px",
    border: "5px solid black"
})

const sidebar = () => {
  return (
    <Box
     bgcolor=""
    flex={1}
    p={5}
    sx={{ display: { xs: "none", sm: "block" }, alignItems: "center"}}
    >
            <Card sx={{ maxWidth: 345, position: "relative", left: "50px", position: "fixed" }}>
          <CardMedia
            sx={{ height: 140 }}
            image={quote}
            title="green iguana"
          />
          <AvatarStyle alt="David Kabanga" src={profile} />
          <CardContent>
            <Typography gutterBottom variant="30px" sx={{ display: 'flex', gap: "7px" }}>
              David Kabanga <Verified sx={{ fontSize: '18px' }} />
            </Typography>
            <Typography variant='h6'>
                Software Developer
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Hi there 😁! My name is David Kabanga. I’m a passionate Full-Stack MERN Developer with expertise in building scalable and efficient web applications. My skills span the entire development process, from designing user-friendly interfaces with React to crafting robust backend systems using Node.js, Express, and MongoDB.

            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
                <GitHub />
            </IconButton>
            <IconButton>
                <LinkedIn />
            </IconButton>
            <IconButton>
                <X />
            </IconButton>
          </CardActions>
        </Card>
    </Box>
  )
}

export default sidebar
