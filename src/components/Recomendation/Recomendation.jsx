import React from "react";
import classes from "./Recomendation.module.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import mantrading from "../Logo/man-trading.png";

function Recomendation() {
  return (
    <div>
      <>
        <Box className={classes.Container}>
          <Box>
            <h2 sx={{}}>Comprehensive Approach To Quality</h2>
          </Box>
          <Box className={classes.menuItems}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                borderBottom: "solid #fdd800 5px",
                borderRadius: "5px",
                paddingBottom: "20px",
              }}
            >
              Project Based Pricing
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                paddingBottom: "20px",
              }}
            >
              Dedicated Development
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                paddingBottom: "20px",
              }}
            >
              Milestone-based
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.3rem", md: "1.6rem" },
                paddingBottom: "20px",
              }}
            >
              Effort Base Pricing
            </Typography>
          </Box>
          <Box className={classes.menudetails}>
            <Box className={classes.menuImg}>
              <img
                src={mantrading}
                alt="Meeting Img"
                className={classes.imglogo}
              />
            </Box>
            <Box className={classes.menuText}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.95rem" },
                  fontWeight: 500,
                  padding: "0 50px 0 0 ",
                }}
              >
                Quality Control
              </Typography>
              <Typography
                variant="p"
                component="p"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  padding: "0 50px 0 0 ",
                }}
              >
                In order to test the code and to monitor its consistency, we
                stick to remarkable performance standards that are sound on the
                grounds of quality and excellence.
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default Recomendation;
