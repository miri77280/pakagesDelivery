import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from "@mui/material/MenuItem";
import { Link} from 'react-router-dom';
import Menu from "@mui/material/Menu";

const AppMenu = (props) =>   {

  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="Menu">
                  <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}  
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>
        <Link to="./customers">customers</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to="./packages">packages</Link> 
          </MenuItem>
          <MenuItem onClick={handleClose}>
        <Link to="./invoices">invoices</Link> 
          </MenuItem>
      </Menu>
             
                  
    </div>

  );
}

export default AppMenu;
