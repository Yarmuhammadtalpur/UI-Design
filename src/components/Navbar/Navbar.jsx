import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import stack from "../Logo/stack.png";
import classes from "./Navbar.module.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
const pages = [
  {
    page: "Technologies",
    menuLeft: [
      "Blockchain",
      "Virtual Reality",
      "Cloud Transformation",
      "Machine Learning and AI",
    ],
    menuRight: [
      "Qunatum Computing",
      "Internet of Things",
      "Penetration Testing",
    ],
  },
  {
    page: "Engineering",
    menuLeft: [
      "Full Stack Web Development",
      "Mobile Development",
      "UI/UX Design",
    ],
    menuRight: ["System Engineering", "DevOps Engineering"],
  },
  {
    page: "Services",
    menuLeft: ["Product Design", "Consulting"],
    menuRight: ["Full-Cycle Development", "Maintenance and Support"],
  },
  {
    page: "Resources",
    menuLeft: ["Articles", "Contact Support "],
    menuRight: ["FAQ"],
  },
  { page: "IP Protection", menuLeft: [], menuRight: [] },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "gray",
        boxShadow: "none",
        paddingBlockEnd: "50px",
      }}
    >
      {/*  */}

      {/* /// */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img src={stack} alt="devLogo" className={classes.logo} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "Black",
              fontSize: "1.8rem",
              textDecoration: "none",
            }}
          >
            Devstack
          </Typography>

          {/* //responsive part start*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "gray" }}>
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={stack} alt="devLogo" className={classes.logo} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "Black",
              fontSize: "1.2rem",
              textDecoration: "none",
            }}
          >
            Devstack
          </Typography>
          {/* Responsive end */}

          <Box
            justifyContent="space-evenly"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((item) => (
              <Button
                key={item}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  textTransform: "none",
                  color: "gray",
                  display: "block",
                }}
              >
                <div className={classes.menuText}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        {item.page}
                        {item.page !== "IP Protection" && (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <div className={classes.MenudropItems}>
                      <div className={classes.MenudropItemLeft}>
                        {/* {item.menuLeft.map((item) => (
                          <MenuItem>
                            <ListItemIcon className={classes.MenudropItemIcon}>
                              <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            {item}
                          </MenuItem>
                        ))} */}

                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <PersonAdd fontSize="small" />
                          </ListItemIcon>
                          Add another account
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </div>
                      <div className={classes.MenudropItemRight}>
                        {/* {page.menuRight.map((item) => (
                          <MenuItem>
                            <ListItemIcon className={classes.MenudropItemIcon}>
                              <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            {item}
                          </MenuItem>
                        ))} */}
                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <PersonAdd fontSize="small" />
                          </ListItemIcon>
                          Add another account
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Settings
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon className={classes.MenudropItemIcon}>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                      </div>
                    </div>
                  </Menu>
                </div>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Button
                  variant="contained"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    backgroundColor: "#fdd800",
                    color: "Black",
                    display: "block",
                    fontWeight: "550",
                    textTransform: "none",
                    borderRadius: "13px",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#fdd700aa",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
