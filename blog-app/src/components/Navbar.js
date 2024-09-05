import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';
const Navbar = ({ toggleTheme }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerItems = (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/category/technology">
        <ListItemText primary="Technology" />
      </ListItem>
      <ListItem button component={Link} to="/category/travel">
        <ListItemText primary="Travel" />
      </ListItem>
      <ListItem button component={Link} to="/category/food">
        <ListItemText primary="Food" />
      </ListItem>
      <ListItem button component={Link} to="/category/lifestyle">
        <ListItemText primary="Lifestyle" />
      </ListItem>
    </List>
  );

  return (
    <>
  
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BlogApp
          </Typography>
          <Switch onChange={toggleTheme} />
        </Toolbar>
      </AppBar>
      <Link to="/new-blog">
        <Button variant="contained" color="primary">
          Write a Blog
        </Button>
      </Link>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerItems}
      </Drawer>
    </>
  );
};

export default Navbar;

