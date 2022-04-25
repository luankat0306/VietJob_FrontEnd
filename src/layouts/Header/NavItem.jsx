import { Button, MenuItem, MenuList, Paper } from '@mui/material';
import Popover from '@mui/material/Popover';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavItem({ id, label, listMenu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  return (
    <>
      <Button
        aria-owns={open ? 'mouse-over-popover' + id : undefined}
        // aria-haspopup="true"
        onMouseOver={handlePopoverOpen}
        size="large"
        color="primary"
        sx={{ my: 2 }}
      >
        {label}
      </Button>

      <Popover
        id={'mouse-over-popover' + id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
      >
        <Paper onMouseLeave={handlePopoverClose}>
          <MenuList>
            {listMenu.map((item, index) => (
              <MenuItem key={index} onClick={() => navigate(item.href)}>
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popover>
    </>
  );
}
