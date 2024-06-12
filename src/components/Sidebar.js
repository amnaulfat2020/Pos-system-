// src/components/Sidebar.js
import React from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse, Box } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import PlaceIcon from '@mui/icons-material/Place';
import CheckIcon from '@mui/icons-material/Check';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './Sidebar.css';  // Import CSS file

const Sidebar = () => {
  const [openSettings, setOpenSettings] = React.useState(false);
  const [openPurchase, setOpenPurchase] = React.useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  const handlePurchaseClick = () => {
    setOpenPurchase(!openPurchase);
  };

  return (
    <Drawer
      variant="permanent"
      className="drawer"
    >
      <Box className="drawer-box">
        <Typography variant="h6" noWrap component="div" className="drawer-title">
          POS System
        </Typography>
        <List>
          <ListItem className="list-item">
            <ListItemIcon>
              <PersonIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Purchase" className="list-text" />
            <CheckIcon className="check-icon" />
          </ListItem>
          <Typography variant="body2" className="online-text">
            Online
          </Typography>
        </List>
        <List className="menu-list">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className="list-text" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InventoryIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Items" className="list-text" />
          </ListItem>
          <ListItem button onClick={handlePurchaseClick}>
            <ListItemIcon>
              <ShoppingCartIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Purchase" className="list-text" />
            {openPurchase ? <ExpandLess className="icon" /> : <ExpandMore className="icon" />}
          </ListItem>
          <Collapse in={openPurchase} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className="nested-list-item">
                <ListItemIcon>
                  <AddShoppingCartIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="New Purchase" className="list-text" />
              </ListItem>
              <ListItem button className="nested-list-item">
                <ListItemIcon>
                  <ListAltIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Purchase List" className="list-text" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleSettingsClick}>
            <ListItemIcon>
              <SettingsIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Settings" className="list-text" />
            {openSettings ? <ExpandLess className="icon" /> : <ExpandMore className="icon" />}
          </ListItem>
          <Collapse in={openSettings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className="nested-list-item">
                <ListItemIcon>
                  <LockIcon className="icon" />
                </ListItemIcon>
                <ListItemText primary="Change Password" className="list-text" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <StoreIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Supplier" className="list-text" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PlaceIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Place" className="list-text" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
