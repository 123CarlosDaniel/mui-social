import { Email, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,     //Header
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,    //Div con ancho de 100%
  Typography,
} from "@mui/material";
import { Box, palette } from "@mui/system";
import React,{useState} from "react";

const StyledToolbar = styled(Toolbar)({ //Div con ancho de 100%
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">    
      <StyledToolbar>     
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }}></Pets>
        <Search  color="text.primary">
          <InputBase placeholder="Search ..." sx={{ width:"100%"}}></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Email></Email>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750dpr=2"
            onClick={() => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ height: 30, width: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750dpr=2"
          ></Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => setOpen(false)}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
