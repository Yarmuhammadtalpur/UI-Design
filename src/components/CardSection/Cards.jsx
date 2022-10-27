import React from "react";
import classes from "./Cards.module.css";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SpeedIcon from "@mui/icons-material/Speed";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import HandshakeIcon from "@mui/icons-material/Handshake";
function Cards() {
  const iconStyle = {
    fontSize: "6rem",
    color: "#fdd800",
  };
  const cardData = [
    {
      icon: <WorkspacePremiumIcon sx={iconStyle} />,
      title: "Quality",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      icon: <SpeedIcon sx={iconStyle} />,
      title: "Speed",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      icon: <ForkRightIcon sx={iconStyle} />,
      title: "Flexibility",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
    {
      icon: <HandshakeIcon sx={iconStyle} />,
      title: "Engagement",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis quos, aliquid facere ullam quasi impedit vitae dolores ducimus eligendi velit numquam animi dolorem debitis aspernatur eum pariatur aliquam magni!.",
    },
  ];

  return (
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
            {item.icon}
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
  );
}

export default Cards;
