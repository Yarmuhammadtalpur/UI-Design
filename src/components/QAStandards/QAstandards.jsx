import React from "react";
import classes from "./QAstandards.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Box } from "@mui/system";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SpeedIcon from "@mui/icons-material/Speed";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import HandshakeIcon from "@mui/icons-material/Handshake";
function QAstandards() {
  const iconStyle = {
    fontSize: "6rem",
    color: "#fdd800",
  };
  const cardData = [
    {
      No: "01",
      title: "Planning and requirement analysis",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      No: "02",
      title: "Code Review",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      No: "03",
      title: "Immediate testing",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      No: "04",
      title: "Final verification",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
  ];

  return (
    <div className={classes.CdContainer}>
      <h1>QA Standards That Shaped The Development And Quality</h1>
      <box className={classes.cards}>
        {cardData.map((item) => (
          <Box
            className={classes.card}
            sx={{
              maxWidth: 240,
              padding: "20px 20px",
            }}
          >
            <Box className={classes.cardItem}>
              <Box className={classes.buttonShape}>
                <Box className={classes.shape}></Box>
                <Box className={classes.text}>{item.No}</Box>
              </Box>
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                sx={{ textAlign: "center", color: "black", fontWeight: 500 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", lineHeight: "1.4", color: "black" }}
              >
                {item.details}
              </Typography>
            </Box>
          </Box>
        ))}
      </box>
    </div>
  );
}

export default QAstandards;
