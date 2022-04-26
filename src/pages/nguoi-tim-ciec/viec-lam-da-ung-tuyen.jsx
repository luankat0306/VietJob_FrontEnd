import { Button, Card, CardContent, CardHeader, Container, Stack, Typography } from '@mui/material';

function ViecLamDaUngTuyenPage() {
  return (
    <Container fixed sx={{ mt: 4, mb: 4, p: 2 }}>
      <Card elevation={1}>
        <CardHeader title="Công việc đã ứng tuyển" />
        <CardContent>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            <Typography textAlign="center" variant="h6" color="textSecondary" component="p">
              Bạn chưa ứng tuyển công việc nào.
            </Typography>
            <Button variant="contained" color="primary">
              Tìm Việc ngay
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ViecLamDaUngTuyenPage;
