import * as React from 'react';
import Box from '@mui/material/Box';
import { primary } from '../../theme/themeColors';
import cover from '../../assets/employer-pngs/cmc-cover.jpg';
import avatar from '../../assets/employer-pngs/cmc-avatar.jpg';
import { grey } from '@mui/material/colors';
import {
  Paper,
  Container,
  Typography,
  Grid as MuiGrid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Pagination,
  Link
} from '@mui/material';
import EmployerSearchBar from '@/components/EmployerSearchBar/EmployerSearchBar';

function DanhSachNhaTuyenDungPage() {
  return (
    <Paper sx={{}}>
      <EmployerSearchBar />
      <Box data-aos="fade-right" sx={{ width: '100%' }}>
        <Container>
          <Typography
            data-aos="fade-right"
            sx={{
              textAlign: 'center',
              mb: 5,
              color: grey[800]
            }}
            variant="h4"
            fontWeight={500}
          >
            Danh Sách Các Nhà Tuyển Dụng Nổi Bật
          </Typography>
          <Link href="/nha-tuyen-dung/danh-sach/chi-tiet-nha-tuyen-dung" underline="none">
            <MuiGrid
              data-aos="fade-right"
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <MuiGrid item xs={2} sm={4} md={4} key={index}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: `4px solid transparent`,
                      transition: 'ease-in-out 0.3s',
                      ':hover': {
                        border: `4px solid ${primary[200]}`,
                        transform: `scale(1.05)`,
                        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                        cursor: 'pointer'
                      }
                    }}
                  >
                    <CardActionArea>
                      <Box sx={{ position: 'relative', mb: 5 }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={cover}
                          sx={{
                            objectFit: 'cover'
                          }}
                        />

                        <CardMedia
                          component="img"
                          image={avatar}
                          sx={{
                            objectFit: 'cover',
                            width: 130,
                            height: 100,
                            border: `4px solid ${primary[100]}`,
                            borderRadius: 2,
                            position: 'absolute',
                            bottom: -50,
                            left: 30,
                            zIndex: 1
                          }}
                        />
                      </Box>
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          CÔNG TY TNHH CMC GLOBAL
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary">
                          CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm
                          kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ
                          mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao,
                          cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC
                          Global đang sở hữu đến 700++ nhân viên,...
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </MuiGrid>
              ))}
            </MuiGrid>
          </Link>
          <Box
            fullWidth
            sx={{
              mt: 3,
              mb: 3,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination count={5} shape="rounded" />
          </Box>
        </Container>
      </Box>
    </Paper>
  );
}
export default DanhSachNhaTuyenDungPage;
