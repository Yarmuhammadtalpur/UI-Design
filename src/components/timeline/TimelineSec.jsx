import React from "react";
import classes from "./Timeline.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { IconButton, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

export default function TimelineSec() {
  const buttonStyle = {
    marginBlockStart: "-20px",
    color: "white",
    backgroundColor: "#fdd800",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "3rem",
  };
  const timelinetext = [
    {
      No: "01",
      icon: <LockIcon sx={buttonStyle} />,
      head: "We protect your ideas",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { right: "50%" },
      position: "left",
    },
    {
      No: "02",
      icon: <Diversity3Icon sx={buttonStyle} />,
      head: "In-Depth Consultations",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { left: "50%" },
      position: "right",
    },
    {
      No: "03",
      icon: <TrendingUpOutlinedIcon sx={buttonStyle} />,
      head: "Planning, Analysis & \nprototype",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { right: "50%" },
      position: "left",
    },
    {
      No: "04",
      icon: <CreateOutlinedIcon sx={buttonStyle} />,
      head: "Design: User Interface (UI) \n& User Experience t(UX)",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { left: "50%" },
      position: "right",
    },
    {
      No: "05",
      icon: <SettingsOutlinedIcon sx={buttonStyle} />,
      head: " Rapid Agile Development",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { right: "50%" },
      position: "left",
    },
    {
      No: "06",
      icon: <BugReportOutlinedIcon sx={buttonStyle} />,
      head: "Testing and Quality \nAssurance",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { left: "50%" },
      position: "right",
    },
    {
      No: "07",
      icon: <RocketLaunchOutlinedIcon sx={buttonStyle} />,
      head: "Deployment & Final Launch",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { right: "50%" },
      position: "left",
    },
    {
      No: "08",
      icon: <SupportAgentOutlinedIcon sx={buttonStyle} />,
      head: "Support & Maintenance",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { left: "50%" },
      position: "right",
    },
    {
      No: "09",
      icon: <SignalCellularAltOutlinedIcon sx={buttonStyle} />,
      head: "Growth Hacking",
      details:
        "We start every project by signing NDA, to keep your intellectual wealth secure, no compromising with proprietorship on your idea ",
      styles: { right: "50%" },
      position: "left",
    },
  ];
  return (
    <div className="Timeline Container">
      <Container>
        <Timeline position="alternate" sx={{ margin: "100px 0" }}>
          {timelinetext.map((item) => (
            <TimelineItem
              key={item.No}
              position="left"
              sx={{ margin: { xs: "50px 0", md: "0" } }}
            >
              <TimelineSeparator>
                <IconButton
                  aria-label="fingerprint"
                  sx={{
                    backgroundColor: "white",
                    border: "solid #fdd800 3px",
                    color: "Black",
                    display: "block",
                    fontWeight: "500",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fdd700aa",
                      border: "solid transparent 3px",
                    },
                  }}
                >
                  {item.No}
                </IconButton>

                <TimelineConnector />

                <span className={classes.topBorder} style={item.styles}></span>
              </TimelineSeparator>
              <TimelineContent>
                <div className={classes.timelineItems}>
                  <Box>{item.icon}</Box>

                  <Box className={classes.timelineItem}>
                    <Typography
                      className={classes.TitleTime}
                      variant="h1"
                      sx={{
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        color: "Black",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        lineHeight: { xs: ".5px" },
                        textDecoration: "none",
                        width: "max-content",
                        textAlign: "right",
                      }}
                    >
                      {item.head.split("\n").map((i) => {
                        return <h4>{i}</h4>;
                      })}
                    </Typography>
                    <Box>
                      <p className={classes.details}>{item.details}</p>
                    </Box>
                  </Box>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </div>
  );
}
