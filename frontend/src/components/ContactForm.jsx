import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { Send } from "@mui/icons-material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to handle form submission (e.g., API call)
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="email"
              label="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
            endIcon={<Send />}
          >
            SEND
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
