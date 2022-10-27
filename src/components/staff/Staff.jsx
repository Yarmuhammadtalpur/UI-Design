import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "./Staff.module.css";
import banknotes from "../Logo/banknotes.png";
import time from "../Logo/back-in-time.png";
import verified from "../Logo/verified.png";
import solution from "../Logo/solution.png";

function Staff() {
  return (
    <div className={classes.StaffContainer}>
      <h2>Why we recommend Staff augmentation ?</h2>
      <Box className={classes.staffbottom}>
        <Box className={classes.staffleft}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            sapiente libero adipisci, reprehenderit aut labore nemo molestias
            laudantium explicabo, maiores atque earum asperiores. Commodi earum
            rerum unde quisquam illo numquam. Quaerat assumenda, expedita,
            recusandae officia delectus, fuga eaque quam similique deserunt
            explicabo aspernatur! Placeat quia ipsa cum quae, saepe ab eius fuga
            molestiae, autem adipisci, pariatur mollitia itaque quisquam
            voluptas! Ullam accusamus <br />
            <br />
            similique ducimus inventore autem, explicabo praesentium iure id vel
            officiis, eaque cumque aperiam, pariatur rerum corporis quas odit.
            Debitis eveniet enim delectus magni ipsa saepe excepturi porro
            exercitationem. Assumenda sed voluptates quaerat iure similique
            impedit quisquam fuga quibusdam, voluptatem voluptatum molestias
            atque. Hic, possimus placeat reiciendis corporis sed maxime minima
            sit ipsa veritatis quisquam quaerat delectus illo quas!
          </p>
          <Button
            size="large"
            variant="contained"
            sx={{
              backgroundColor: "#fdd800",
              color: "Black",
              display: "block",
              fontWeight: "550",
              textTransform: "none",
              borderRadius: "13px",
              fontSize: "1.2rem",
              boxShadow: "none",
              width: "100%",
              "&:hover": {
                backgroundColor: "#fdd700aa",
              },
            }}
          >
            Get Free Consultation Now
          </Button>
        </Box>
        <Box className={classes.staffright}>
          <box className={classes.cards}>
            <Box
              className={classes.card}
              sx={{
                padding: "20px 20px",
              }}
            >
              <Box className={classes.cardItem}>
                <Box className={classes.buttonShape}>
                  <Box className={classes.shape}>
                    <img
                      src={banknotes}
                      alt="logo text"
                      className={classes.logoICon}
                    />
                  </Box>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  Cost Effectiveness
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "left",
                    lineHeight: "1.4",
                    color: "black",
                  }}
                >
                  Hic, possimus placeat reiciendis corporis sed maxime minima
                  sit ipsa veritatis quisquam quaerat delectus illo
                </Typography>
              </Box>
            </Box>
            <Box
              className={classes.card}
              sx={{
                padding: "20px 20px",
              }}
            >
              <Box className={classes.cardItem}>
                <Box className={classes.buttonShape}>
                  <Box className={classes.shape}>
                    <img
                      src={solution}
                      alt="logo text"
                      className={classes.logoICon}
                    />
                  </Box>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  Direct Access
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "left",
                    lineHeight: "1.4",
                    color: "black",
                  }}
                >
                  Hic, possimus placeat reiciendis corporis sed maxime minima
                  sit ipsa veritatis quisquam quaerat delectus illo
                </Typography>
              </Box>
            </Box>
          </box>
          <box className={classes.cards}>
            <Box
              className={classes.card}
              sx={{
                padding: "20px 20px",
              }}
            >
              <Box className={classes.cardItem}>
                <Box className={classes.buttonShape}>
                  <Box className={classes.shape}>
                    <img
                      src={time}
                      alt="logo text"
                      className={classes.logoICon}
                    />
                  </Box>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  Time Efficient
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "left",
                    lineHeight: "1.4",
                    color: "black",
                  }}
                >
                  Hic, possimus placeat reiciendis corporis sed maxime minima
                  sit ipsa veritatis quisquam quaerat delectus illo
                </Typography>
              </Box>
            </Box>
            <Box
              className={classes.card}
              sx={{
                padding: "20px 20px",
              }}
            >
              <Box className={classes.cardItem}>
                <Box className={classes.buttonShape}>
                  <Box className={classes.shape}>
                    <img
                      src={verified}
                      alt="logo text"
                      className={classes.logoICon}
                    />
                  </Box>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  sx={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: 500,
                    fontSize: "1.2rem",
                  }}
                >
                  IP Protection
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    textAlign: "left",
                    lineHeight: "1.4",
                    color: "black",
                  }}
                >
                  Hic, possimus placeat reiciendis corporis sed maxime minima
                  sit ipsa veritatis quisquam quaerat delectus illo
                </Typography>
              </Box>
            </Box>
          </box>
        </Box>
      </Box>
    </div>
  );
}

export default Staff;
