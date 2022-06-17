import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavItem } from '.';
import useAuth from '../../hooks/auth/useAuth';
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  height: 78,
  background: theme.palette.background.paper,
  transition: 'height 250ms ease-in-out',

  [theme.breakpoints.down('sm')]: {
    height: 64
  }
}));
const Header = (props) => {
  const { isLogin = false, ...rest } = props;
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { logoutCandidate } = useAuth();
  const settings = [
    { label: 'Thông tin cá nhân', onClick: logoutCandidate },
    { label: 'Đăng xuất', onClick: logoutCandidate }
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="relative" color="inherit" elevation={1} {...rest}>
      {/* <HeaderWrapper> */}

      <Toolbar id="back-to-top-anchor">
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button size="large" color="primary" sx={{ my: 2 }} onClick={() => navigate('/')}>
            Trang chủ
          </Button>
          <NavItem
            id="viec-lam"
            label="Việc làm"
            listMenu={[
              { label: 'Tìm kiếm việc làm', href: '/viec-lam/tim-kiem' },
              { label: 'Việc làm đã ứng tuyền', href: '/nguoi-tim-viec/viec-lam-da-ung-tuyen' },
              { label: 'Việc làm đã lưu', href: '/nguoi-tim-viec/viec-lam-da-luu' }
            ]}
          />
          <NavItem
            id="ho-so"
            label="Hồ sơ & CV"
            listMenu={[
              { label: 'Quản lý CV', href: '/nguoi-tim-viec/quan-ly-cv' },
              { label: 'Thông tin cá nhân', href: '/nguoi-tim-viec/thong-tin-ca-nhan' }
            ]}
          />
          <NavItem
            id="cong-ty"
            label="Nhà tuyển dụng"
            listMenu={[
              { label: 'Danh sách', href: '/nha-tuyen-dung/danh-sach' },
              { label: 'Top nhà tuyển dụng', href: '/nha-tuyen-dung/top-cong-ty' }
            ]}
          />
        </Box>
        {isLogin ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.label}
                  onClick={() => {
                    setting.onClick();
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button
              size="large"
              color="primary"
              variant="outlined"
              onClick={() => navigate('/dang-nhap')}
            >
              Đăng nhập
            </Button>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => navigate('/dang-ky')}
            >
              Đăng ký
            </Button>
            <Button size="large" color="secondary" variant="contained">
              Đăng tuyển & tìm hồ sơ
            </Button>
          </Stack>
        )}
      </Toolbar>

      {/* </HeaderWrapper> */}
    </AppBar>
  );
};
export default Header;
