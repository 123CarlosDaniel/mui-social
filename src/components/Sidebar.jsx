import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const Sidebar = ({mode,setMode}) => {
  return (
    <Box
      padding={2}
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home ></Home>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Pages ></Pages>
            </ListItemIcon>
            <ListItemText primary="Pages"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Groups ></Groups>
            </ListItemIcon>
            <ListItemText primary="Groups"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Storefront ></Storefront>
            </ListItemIcon>
            <ListItemText primary="Marketplace"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Person ></Person>
            </ListItemIcon>
            <ListItemText primary="Friends"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Settings ></Settings>
            </ListItemIcon>
            <ListItemText primary="Settings"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <AccountBox ></AccountBox>
            </ListItemIcon>
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNight ></ModeNight>
            </ListItemIcon>
            <Switch onChange={ e=>setMode(mode==="light" ? "dark": "light")}></Switch>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
