import { Box } from "@mui/system";
import React from "react";
import classes from "./Marking.module.css";
function Marking() {
  return (
    <div className={classes.MarkingContainer}>
      <h2>Think Unique? Then why settle for Generic?</h2>
      <Box className={classes.CardContainer}>
        <Box className={classes.card}>
          <Box className={classes.logo}>01</Box>
          <Box className={classes.text}>Cost-Effective Pricing</Box>
        </Box>
        <Box className={classes.card}>
          <Box className={classes.logo}>02</Box>
          <Box className={classes.text}>Flexible Biling Plans</Box>
        </Box>
        <Box className={classes.card}>
          <Box className={classes.logo}>03</Box>
          <Box className={classes.text}>Dedicated Develoment</Box>
        </Box>
        <Box className={classes.card}>
          <Box className={classes.logo}>04</Box>
          <Box className={classes.text}>Build-Operate Transfer (BOT) Model</Box>
        </Box>
        <Box className={classes.card}>
          <Box className={classes.logo}>05</Box>
          <Box className={classes.text}>Project Based Pricing or Fixed Bid</Box>
        </Box>
      </Box>
    </div>
  );
}

export default Marking;
