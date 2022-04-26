import { UploadRounded } from '@mui/icons-material';
import { Button, Card, CardContent, CardHeader, Container, Typography } from '@mui/material';

function QuanLyCVPage() {
  return (
    <Container fixed sx={{ mt: 4, mb: 4, p: 2 }}>
      <Card elevation={1} title="CV đã tải lên">
        <CardHeader
          action={
            <Button color="primary" variant="contained" startIcon={<UploadRounded />}>
              Tải CV lên
            </Button>
          }
          title="CV đã tải lên"
        />
        <CardContent>
          <Typography textAlign="center" variant="h6" color="textSecondary" component="p">
            Bạn chưa tải lên CV nào.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default QuanLyCVPage;
