import { AppBar, Box, Button, Stack, styled, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NavItem } from '.';
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
  const navigate = useNavigate();
  return (
    <AppBar position="relative" color="inherit" elevation={1} {...props}>
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
              { label: 'Việc làm đã ứng tuyền', href: '/' },
              { label: 'Việc làm đã lưu', href: '/' }
            ]}
          />
          <NavItem
            id="ho-so"
            label="Hồ sơ & CV"
            listMenu={[
              { label: 'Quản lý CV', href: '/quan-ly-cv' },
              { label: 'Thông tin hồ sơ', href: '/thong-tin-ho-so' }
            ]}
          />
          <NavItem
            id="cong-ty"
            label="Công ty"
            listMenu={[
              { label: 'Danh sách công ty', href: '/danh-sach-cong-ty' },
              { label: 'Top công ty', href: '/top-cong-ty' }
            ]}
          />
        </Box>
        <Stack direction="row" spacing={1}>
          <Button size="large" color="primary" variant="outlined">
            Đăng nhập
          </Button>
          <Button size="large" color="primary" variant="contained">
            Đăng ký
          </Button>
          <Button size="large" color="secondary" variant="contained">
            Đăng tuyển & tìm hồ sơ
          </Button>
        </Stack>
      </Toolbar>

      {/* </HeaderWrapper> */}
    </AppBar>
  );
};
export default Header;
