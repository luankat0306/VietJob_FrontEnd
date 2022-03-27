import { Button, Container, Stack, styled, Box } from '@mui/material';
import React from 'react';

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

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Button size="large" color="primary">
            Trang chủ
          </Button>
          <Button size="large" color="primary">
            Việc làm
          </Button>

          <Button size="large" color="primary">
            Hồ sơ
          </Button>
          <Button size="large" color="primary">
            Công ty
          </Button>
        </Stack>
        <Button size="large" color="primary" variant="contained">
          Đăng kí
        </Button>
      </Container>
    </HeaderWrapper>
  );
};
