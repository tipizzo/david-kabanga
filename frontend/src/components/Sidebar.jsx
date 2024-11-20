import {
    GitHub,
    LinkedIn,
    Verified,
    X,
  } from "@mui/icons-material";
  import {
    styled,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Avatar,
    IconButton,
  } from "@mui/material";
  import React from "react";
  import quote from "../assets/quote.jpg"; // Ensure the path is correct
  import profile from "../assets/profile.jpeg"; // Ensure the path is correct
  
  const AvatarStyle = styled(Avatar)({
    position: "relative",
    bottom: "35px",
    left: "10px",
    height: "70px",
    width: "70px",
    border: "5px solid black",
  });
  
  const Sidebar = () => {
    return (
      <Box
        flex={1}
        p={2}
        sx={{
          display: { xs: "none", md: "block" }, // Sidebar visible on medium+ screens
          position: "sticky", // Sticky sidebar
          top: "64px", // Adjust to match navbar height
          height: "calc(100vh - 64px)", // Subtract navbar height
          overflowY: "auto", // Allow scrolling if content exceeds height
          borderRight: "1px solid #ddd", // Optional: Add a border for separation
        }}
      >
        <Card sx={{ margin: "0 auto", marginTop: '30px', width: "75%" }}>
          <CardMedia
            sx={{ height: 180 }}
            image={quote} // Your quote image
            title="Life Motto"
          />
          <AvatarStyle alt="David Kabanga" src={profile} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              David Kabanga <Verified sx={{ fontSize: "18px" }} />
            </Typography>
            <Typography variant="subtitle1">Software Developer</Typography>
            <Typography variant="body2" color="text.secondary">
              Hi there 😁! My name is David Kabanga. I’m a passionate Full-Stack
              MERN Developer with expertise in building scalable and efficient web
              applications. My skills span the entire development process, from
              designing user-friendly interfaces with React to crafting robust
              backend systems using Node.js, Express, and MongoDB.
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
    );
  };
  
  export default Sidebar;
  