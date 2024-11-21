import { Breadcrumbs, Link, styled, Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Button, Checkbox } from '@mui/material'
import { Share, CheckBox, MoreVert, GitHub, Visibility, Preview, Favorite, FavoriteBorder, IntegrationInstructions } from '@mui/icons-material'
import React from 'react'

const StyledBox = styled(Box)({
    
})

const HashtagLink = styled(Link)({
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "13px",
    margin: "2px"
    
})

const Feeds = () => {
  return (
    <Box flex={1} p={5} bgcolor="#f6f6f6">
        <Typography gutterBottom sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: "30px" }}>
            Activity <span className='emoji'>🚀</span>
        </Typography>
         <Card sx={{ margin: " 10px auto 30px", width: "90%",  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            DK
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Netflix-Clone"
        subheader="September 14, 2024"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://loremflickr.com/500/500?random"
        alt="Paella dish"
      />
      <CardContent>
        <HashtagLink>#ReactJS</HashtagLink>
        <HashtagLink>#MaterialUI</HashtagLink>
        <HashtagLink>#Web3Forms</HashtagLink>
        <HashtagLink>#Redux</HashtagLink>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton>
            <GitHub />
        </IconButton>
        <IconButton>
            <Visibility />
        </IconButton>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{  color:"red"}} />} />
        </IconButton>
      </CardActions>
      
    </Card>

    <Card sx={{ margin: " 10px auto 30px", width: "90%",  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            DK
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Netflix-Clone"
        subheader="September 14, 2024"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://loremflickr.com/500/500?random"
        alt="Paella dish"
      />
      <CardContent>
        <HashtagLink>#ReactJS</HashtagLink>
        <HashtagLink>#MaterialUI</HashtagLink>
        <HashtagLink>#Web3Forms</HashtagLink>
        <HashtagLink>#Redux</HashtagLink>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton>
            <GitHub />
        </IconButton>
        <IconButton>
            <Visibility />
        </IconButton>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{  color:"red"}} />} />
        </IconButton>
      </CardActions>
      
    </Card>

    <Card sx={{ margin: " 10px auto 30px", width: "90%",  }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            DK
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Netflix-Clone"
        subheader="September 14, 2024"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://loremflickr.com/500/500?random"
        alt="Paella dish"
      />
      <CardContent>
        <HashtagLink>#ReactJS</HashtagLink>
        <HashtagLink>#MaterialUI</HashtagLink>
        <HashtagLink>#Web3Forms</HashtagLink>
        <HashtagLink>#Redux</HashtagLink>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton>
            <GitHub />
        </IconButton>
        <IconButton>
            <Visibility />
        </IconButton>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{  color:"red"}} />} />
        </IconButton>
      </CardActions>
      
    </Card>
    </Box>
  )
}

export default Feeds
