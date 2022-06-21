import { selectUserInfo } from '@/redux/authSlice';
import { primary } from '@/theme/themeColors';
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
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavItem } from '.';
import useAuth from '../../hooks/auth/useAuth';
import logo from '../../assets/logo.png';
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
  const { logout } = useAuth();
  const settings = [
    { label: 'Thông tin cá nhân', onClick: () => navigate('/nguoi-tim-viec/thong-tin-ca-nhan') },
    { label: 'Đăng xuất', onClick: logout }
  ];

  const settingNTD = [
    {
      label: 'Thông tin cá nhân',
      onClick: () => navigate('/nha-tuyen-dung/thong-tin-ca-nhan')
    },
    {
      label: 'Quản lý bài đăng',
      onClick: () => navigate('/nha-tuyen-dung/quan-ly-bai-dang')
    },

    { label: 'Đăng xuất', onClick: logout }
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const info = useSelector(selectUserInfo);
  return (
    <AppBar position="relative" color="inherit" elevation={1} {...rest}>
      {/* <HeaderWrapper> */}

      <Toolbar id="back-to-top-anchor">
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Avatar
            variant="rounded"
            sx={{
              width: '94px',
              height: '100%',
              marginRight: '5rem'
            }}
            src={logo}
          />
          <Button size="large" color="primary" sx={{ my: 2 }} onClick={() => navigate('/')}>
            Trang chủ
          </Button>
          <NavItem
            id="viec-lam"
            label="Việc làm"
            listMenu={[
              { label: 'Tìm kiếm việc làm', href: '/viec-lam/tim-kiem' },
              ...(info?.role === 0
                ? [
                    {
                      label: 'Việc làm đã ứng tuyền',
                      href: '/nguoi-tim-viec/viec-lam-da-ung-tuyen'
                    }
                  ]
                : [])

              // { label: 'Việc làm đã lưu', href: '/nguoi-tim-viec/viec-lam-da-luu' }
            ]}
          />
          {/* <NavItem
            id="ho-so"
            label="Hồ sơ & CV"
            listMenu={[
              { label: 'Quản lý CV', href: '/nguoi-tim-viec/quan-ly-cv' },
              { label: 'Thông tin cá nhân', href: '/nguoi-tim-viec/thong-tin-ca-nhan' }
            ]}
          /> */}
          <Button
            size="large"
            color="primary"
            sx={{ my: 2 }}
            onClick={() => navigate('/nha-tuyen-dung/danh-sach')}
          >
            Nhà tuyển dụng
          </Button>
        </Box>
        {isLogin ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    border: '1px solid' + primary[200],
                    width: 40,
                    height: 40
                  }}
                  alt={info?.name}
                  src={info?.avatar}
                />
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
              {(info?.role === 0 ? settings : settingNTD).map((setting) => (
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
