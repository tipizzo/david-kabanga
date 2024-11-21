import { Box, Typography, Grid2, Avatar, styled } from '@mui/material';
import React from 'react';

import html from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import javascript from '../assets/icons/js.png';
import react from '../assets/icons/physics.png';
import node from '../assets/icons/nodejs.png';
import python from '../assets/icons/python.png';
import git from '../assets/icons/git.png';
import mongo from '../assets/icons/mongo.svg';
import ContactForm from './ContactForm';
import Footer from './Footer';

const StyledAvatar = styled(Avatar)({
  height: "45px",
  width: "45px",
});

const Rightbar = () => {
  return (
    <Box
      flex={1}
      p={5}
      sx={{
        display: { xs: "none", sm: "block" },
        position: "sticky", // Makes the component stay fixed when scrolling
        top: 0,             // Sticks the component at the top of the viewport
        height: "120vh",    // Ensures the rightbar takes full viewport height
        overflowY: "auto",  // Enables internal scrolling if content exceeds height
      }}
    >
      <Typography gutterBottom sx={{ marginTop: '20px', marginBottom: "20px", fontWeight: "bold", fontSize: "30px" }}>
        Tools <span className="tool">⚙️</span>
      </Typography>
      <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid2><StyledAvatar src={html} /></Grid2>
        <Grid2><StyledAvatar src={css} /></Grid2>
        <Grid2><StyledAvatar src={javascript} /></Grid2>
        <Grid2><StyledAvatar src={react} /></Grid2>
        <Grid2><StyledAvatar src={node} /></Grid2>
        <Grid2><StyledAvatar src={python} /></Grid2>
        <Grid2><StyledAvatar src={git} /></Grid2>
        <Grid2><StyledAvatar src={mongo} /></Grid2>
      </Grid2>
      <Typography gutterBottom sx={{ marginTop: "70px", marginBottom: "20px", fontWeight: "bold", fontSize: "30px" }}>
        Contact me <span className="ring">📞</span>
      </Typography>
      <ContactForm />
      <Footer />
    </Box>
  );
};

export default Rightbar;
