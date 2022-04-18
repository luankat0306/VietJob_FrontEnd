import { AppBar, Box, Button, Container, Stack, TextField, Toolbar } from '@mui/material';

function SearchBar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container fixed>
        <Toolbar sx={{ px: '0px !important' }}>
          <Stack sx={{ my: 2 }} direction="row" spacing={1} alignItems="stretch" flexGrow={1}>
            <TextField fullWidth label="Tên công việc, vị trí muốn ứng tuyển" />
            <TextField select fullWidth label="Thành phố" />
            <TextField select fullWidth label="Ngành nghề" />
            <Box>
              <Button sx={{ width: '96px' }} variant="contained" color="primary">
                Tìm Kiếm
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SearchBar;
