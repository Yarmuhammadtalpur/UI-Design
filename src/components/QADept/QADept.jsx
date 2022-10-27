import { Box } from "@mui/material";
import React from "react";
import classes from "./QADept.module.css";
import document from "../Logo/document.png";
import document2 from "../Logo/document (1).png";
import data from "../Logo/data.png";
import cautionsign from "../Logo/caution-sign.png";
import progress from "../Logo/progress.png";
import systemupdate from "../Logo/system-update.png";

function QADept() {
  return (
    <div className={classes.qaContainer}>
      <Box>
        <h1>Devstack QA Department</h1>
      </Box>
      <Box>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos,
          enim totam eius molestiae ex at repellat nisi alias quam laborum animi
          vero possimus sed accusamus! Laudantium officiis sint fuganim totam
          eius molestiae ex at repellat nisi alias quam laborum animi vero
          possimus sed accusamus! Laudantium officiis sint fuga. possimus sed
          accusamus! Laudantium officiis sint fuga.possimus sed accusamus!
          Laudantium officiis sint fuga.
        </p>
      </Box>
      <Box className={classes.cardsection}>
        <Box className={classes.card}>
          <img src={document2} alt="LogoQa" className={classes.logoImg} />
          <h3>Profound QA Testing</h3>
        </Box>
        <Box className={classes.card}>
          <img src={document} alt="LogoQa" className={classes.logoImg} />
          <h3>Documentation and Code Review </h3>
        </Box>
        <Box className={classes.card}>
          <img src={data} alt="LogoQa" className={classes.logoImg} />
          <h3>Defect monitoring, Tracking, and fixation</h3>
        </Box>
      </Box>
      <Box className={classes.cardsection}>
        <Box className={classes.card}>
          <img src={systemupdate} alt="LogoQa" className={classes.logoImg} />
          <h3>Configuration update and management</h3>
        </Box>
        <Box className={classes.card}>
          <img src={progress} alt="LogoQa" className={classes.logoImg} />
          <h3>Process and progress management</h3>
        </Box>
        <Box className={classes.card}>
          <img src={cautionsign} alt="LogoQa" className={classes.logoImg} />
          <h3>Risk handling</h3>
        </Box>
      </Box>
    </div>
  );
}

export default QADept;
