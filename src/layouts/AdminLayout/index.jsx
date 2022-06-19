import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BarChart, BusinessCenter, BusinessSharp, Place, Star } from '@mui/icons-material';
import { primary } from '@/theme/themeColors';
import { selectUserInfo } from '@/redux/authSlice';
import { useSelector } from 'react-redux';
import { Avatar, Stack } from '@mui/material';

const drawerWidth = 240;

function AdminLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const info = useSelector(selectUserInfo);
  const drawer = (
    <div>
      <Stack alignItems="center" m={2} spacing={2}>
        <Avatar
          alt="Avatar"
          src={info?.avatar}
          sx={{
            width: '64px',
            height: '64px'
          }}
        >
          {info?.name}
        </Avatar>
        <Typography textAlign="center" variant="h6">
          {info?.name}
        </Typography>
      </Stack>

      <Divider />
      <List>
        {[
          {
            icon: <BarChart />,
            label: 'Thống kê',
            href: '/admin/thong-ke'
          },
          {
            icon: <Place />,
            label: 'Quản lý Tỉnh thành',
            href: '/admin/quan-ly-tinh-thanh'
          },
          {
            icon: <BusinessCenter />,
            label: 'Quản lý Ngành nghề',
            href: '/admin/quan-ly-nganh-nghe'
          },
          {
            icon: <Star />,
            label: 'Quản lý Kỹ năng',
            href: '/admin/quan-ly-ky-nang'
          }
        ].map((text, index) => (
          <ListItem
            sx={{
              '&:hover': {
                backgroundColor: '#f5f5f5'
              },
              color: pathname === text.href ? primary.main : '#646464'
            }}
            key={text.label}
            onClick={() => {
              navigate(text.href);
            }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: pathname === text.href ? primary.main : '#646464'
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Trang Quản Trị
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: 'whitesmoke'
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

AdminLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default AdminLayout;
