import { CardJob } from '@/components/CardJob';
import { NavigateNext } from '@mui/icons-material';
import {
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography
} from '@mui/material';

function TimKiemViecLamPage() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="text.primary">
      Tìm kiếm việc làm
    </Typography>
  ];
  const mockJobs = [
    {
      name: 'Tài chính / Ngân hàng',
      enterpriseName: 'Sacombank'
    },
    {
      name: 'IT phần mềm',
      enterpriseName: 'Fpt Software'
    },
    {
      name: 'Kinh doanh / bán hàng',
      enterpriseName: 'Vinamilk'
    },
    {
      name: 'Bất động sản',
      enterpriseName: 'VinGroup'
    },
    {
      name: 'Kế toán / Kiểm toán',
      enterpriseName: 'VinGroup'
    },
    {
      name: 'Dịch vụ bán hàng',
      enterpriseName: 'Thế Giới Di Động'
    },
    {
      name: 'Hành chính / Văn phòng',
      enterpriseName: 'HDBank'
    }
  ];
  return (
    <Container sx={{ mt: 2 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Card sx={{ mt: 2 }} variant="outlined">
        <CardActions sx={{ p: 2 }}>
          <Stack direction="row" spacing={1} flexGrow={1}>
            <TextField fullWidth select label="Hình thức làm việc" />
            <TextField fullWidth select label="Cấp bậc" />
            <TextField fullWidth select label="Kinh nghiệm làm việc" />
            <TextField fullWidth select label="Mức lương" />
          </Stack>
        </CardActions>
        <CardContent sx={{ backgroundColor: '#f3f6f9' }}>
          <Grid container spacing={2}>
            {mockJobs.map((job, index) => (
              <Grid key={index} item xs={12} md={4}>
                <CardJob item={job} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TimKiemViecLamPage;
