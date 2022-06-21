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
import { useEmployers } from '@/hooks/employer';
import { removeEmpty } from '@/utils/format';

function DanhSachNhaTuyenDungPage() {
  const [filter, setFilter] = React.useState({
    page: 1,
    limit: 10
  });
  const { data: employers } = useEmployers(filter);
  return (
    <Paper sx={{}}>
      <EmployerSearchBar
        onChange={(e) =>
          setFilter((prev) => ({
            ...prev,
            ...removeEmpty({
              name: e.target.value
            })
          }))
        }
      />
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
          <MuiGrid
            data-aos="fade-right"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {employers?.map((item, index) => (
              <MuiGrid item xs={2} sm={4} md={4} key={index}>
                <Link
                  href={'/nha-tuyen-dung/chi-tiet-nha-tuyen-dung/' + item?._id}
                  underline="none"
                >
                  <Card
                    sx={{
                      maxWidth: 360,
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
                          height="150"
                          width="100%"
                          image={item?.user?.avatar}
                          sx={{
                            objectFit: 'contain'
                          }}
                        />

                     
                      </Box>
                      <CardContent>
                        <Typography
                          sx={{
                            minHeight: '64px',
                            height: '64px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                          variant="h6"
                          component="div"
                        >
                          {item?.user?.name}
                        </Typography>
                        <Typography
                          sx={{
                            minHeight: '180px',
                            height: '180px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                          variant="body2"
                          component="div"
                          color="text.secondary"
                        >
                          {item?.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </MuiGrid>
            ))}
          </MuiGrid>
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
            <Pagination
              shape="rounded"
              page={filter.page}
              count={Math.floor((employers?.totalPage ?? 9) / 10) ?? 1}
              onChange={(event, value) => {
                setFilter({ ...filter, page: value });
              }}
            />
          </Box>
        </Container>
      </Box>
    </Paper>
  );
}
export default DanhSachNhaTuyenDungPage;
