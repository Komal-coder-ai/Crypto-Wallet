import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo4.png';
import './index.css'; // Your custom styles
import AuthenticationManager from '../../Pages/AuthenticationManager/Index';
import Platform from '../../Pages/Platform';
import Service from '../../Pages/services/Index';
import Investing from '../../Pages/Investing';
import Buyandsell from '../../Pages/Buyandsell';
import Home from '../../Pages/home/Index';
import ButtonCom from '../button';
import { Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuOpen(open);
  };

  const menuItems = [
    { label: 'Buy/Sell', to: '#BuySell' },
    { label: 'Grow', to: '#platform' },
    { label: 'Markets', to: '#BuySell' },
    { label: 'Business', to: '#Investing' },
    { label: 'Support', to: '#Support' },
  ];

  return (
    <>
      <AppBar position="static" className="navbar" sx={{ background: 'none', boxShadow: 'none' }}>
        <Toolbar sx={{ width: '90vw', mx: 'auto' }}>
          <Grid container alignItems="center" justifyContent="space-between">

            {/* Logo and Menu Icon Section for Mobile */}
            <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
              <IconButton edge="start" color="inherit" aria-label="logo" href="/" sx={{ padding: 0 }}>
                <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto' }} />
              </IconButton>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ padding: 0 }}>
                <MenuIcon />
              </IconButton>
            </Grid>

            {/* Logo Section for Desktop */}
            <Grid item md={4} xs={12} sm={6} lg={2} xl={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
              <IconButton edge="start" color="inherit" aria-label="logo" href="/" sx={{ padding: 0 }}>
                <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
              </IconButton>
            </Grid>

            {/* Menu Links Section for Desktop */}
            <Grid item md={4} xs={12} sm={6} lg={3} xl={2} className="d-flex justify-content-center">
              <List className="navlink-container" sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly', width: '100%' }}>
                {menuItems.map((item, index) => (
                  <ListItem key={index} button component={HashLink} smooth to={item.to} className="nav_Link center_link">
                    <ListItemText primary={item.label} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            {/* Buttons Section for Desktop */}
            <Grid item md={4} xs={12} sm={6} lg={3} xl={2} container justifyContent="flex-end" sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Nav.Link className="nav_Link" as={HashLink} smooth to="https://www.bitpaisaa.com/login">
                <ButtonCom name="Sign In" bgcolor="none" border="1px solid" />
              </Nav.Link>
              <Nav.Link className="nav_Link" as={HashLink} smooth to="https://www.bitpaisaa.com/register"

              >
                <ButtonCom name="Sign Up" bgcolor="linear-gradient(190deg, #18C8FF, #933FFE)" border="none" />
              </Nav.Link>
            </Grid>

          </Grid>
        </Toolbar>
      </AppBar>



      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={HashLink} smooth to={item.to} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem button component={HashLink} smooth to="#SignIn" onClick={toggleDrawer(false)}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button component={HashLink} smooth to="#Signup" onClick={toggleDrawer(false)}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>


      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component={HashLink} smooth to={item.to} onClick={toggleDrawer(false)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}

          {/* Move the Sign In / Sign Up buttons inside the drawer */}
          <ListItem button component={HashLink} smooth to="#SignIn" onClick={toggleDrawer(false)}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem button component={HashLink} smooth to="#Signup" onClick={toggleDrawer(false)}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>

      <div>
        <div id="home">
          <Home />
        </div>
        <div id="AuthenticationManager">
          <AuthenticationManager />
        </div>
        <div id="platform">
          <Platform />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="BuySell">
          <Buyandsell />
        </div>
        {/* <Investing></Investing> */}
        <div id="Investing">
          <Investing />
        </div>
        <div className="" id='Support'>
          {/* <ReceiveTransmission/> */}
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
