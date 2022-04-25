import { Button, Menu, MenuItem } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavItem({ id, label, listMenu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  return (
    <div>
      <Button
        aria-owns={open ? 'simple-menu-' + id : undefined}
        aria-haspopup="true"
        onClick={handlePopoverOpen}
        onMouseOver={handlePopoverOpen}
        // onMouseLeave={handlePopoverClose}
        size="large"
        color="primary"
        sx={{ my: 2 }}
      >
        {label}
      </Button>
      <Menu
        id={'simple-menu-' + id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handlePopoverClose}
        MenuListProps={{ onMouseLeave: handlePopoverClose }}
        autoFocus={false}
      >
        {listMenu.map((item, index) => (
          <MenuItem key={index} onClick={() => navigate(item.href)}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
