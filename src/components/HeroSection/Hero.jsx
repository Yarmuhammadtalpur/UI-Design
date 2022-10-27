import React from "react";
import { Box } from "@mui/system";
import classes from "./Hero.module.css";
import { Button, Typography } from "@mui/material";
function Hero() {
  return (
    <div className={classes.Hero}>
      <Box className={classes.box}>
        <Typography
          variant="h1"
          noWrap
          component="h1"
          href=""
          sx={{
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            color: "Black",
            fontSize: { xs: "2.1rem", md: "2.5rem" },
            letterSpacing: "1.2px",
            textDecoration: "none",
            width: "max-content",
          }}
        >
          Product Build <br /> with Precision
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="p"
          href=""
          sx={{
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 600,
            color: "Black",
            fontSize: { xs: "0.8rem", md: "1rem" },
            letterSpacing: ".8px",
            textDecoration: "none",
          }}
        >
          Scalable, secure and futuristic.
        </Typography>
        <Button
          size="large"
          variant="contained"
          sx={{
            my: 2,
            backgroundColor: "#fdd800",
            color: "Black",
            display: "block",
            fontWeight: "550",
            textTransform: "none",
            borderRadius: "13px",
            fontSize: "1.2rem",
            boxShadow: "none",
            width: "max-content",
            "&:hover": {
              backgroundColor: "#fdd700aa",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </div>
  );
}

export default Hero;
