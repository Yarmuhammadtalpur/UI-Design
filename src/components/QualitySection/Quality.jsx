import React from "react";
import classes from "./Quality.module.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import meetingLogo from "../Logo/meeting.png";

function Quality() {
  return (
    <>
      <Box className={classes.Container}>
        <Box>
          <h2 sx={{}}>Comprehensive Approach To Quality</h2>
        </Box>
        <Box className={classes.menuItems}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              paddingBottom: "20px",
            }}
          >
            Planning
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              paddingBottom: "20px",
            }}
          >
            Assurance
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              paddingBottom: "20px",
              borderBottom: "solid #fdd800 5px",
              borderRadius: "5px",
            }}
          >
            Control
          </Typography>
        </Box>
        <Box className={classes.menudetails}>
          <Box className={classes.menuText}>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.95rem" },
                fontWeight: 500,
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
              In order to test the code and to monitor its consistency, we stick
              to remarkable performance standards that are sound on the grounds
              of quality and excellence.
            </Typography>
          </Box>
          <Box className={classes.menuImg}>
            <img
              src={meetingLogo}
              alt="Meeting Img"
              className={classes.imglogo}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Quality;
