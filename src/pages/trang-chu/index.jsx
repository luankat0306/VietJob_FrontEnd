import Banner from '@/components/Banner';
import {
  AccessTime,
  BusinessCenterRounded,
  NavigateBeforeRounded,
  NavigateNextRounded,
  Place
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Controller, Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { primary } from '../../theme/themeColors';
import { formatNumber } from '../../utils/format';
function Home() {
  const mockCategories = [
    {
      name: 'Tài chính / Ngân hàng',
      countJobs: 56231
    },
    {
      name: 'IT phần mềm',
      countJobs: 42064
    },
    {
      name: 'Kinh doanh / bán hàng',
      countJobs: 23634
    },
    {
      name: 'Bất động sản',
      countJobs: 35567
    },
    {
      name: 'Kế toán / Kiểm toán',
      countJobs: 35567
    },
    {
      name: 'Dịch vụ bán hàng',
      countJobs: 35567
    },
    {
      name: 'Hành chính / Văn phòng',
      countJobs: 35567
    }
  ];

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={8}>
        <Banner />
        <Container
          fixed
          // maxWidth="lg"
          sx={{ pb: 10 }}
        >
          <Box>
            <Typography sx={{ textAlign: 'center', mb: 6 }} variant="h3" fontWeight={700}>
              Top ngành nghề nổi bật
            </Typography>

            <Box className="swiper-container">
              <IconButton
                color="primary"
                className="button-prev"
                onClick={() => {
                  controlledSwiper2.slidePrev();
                }}
              >
                <NavigateBeforeRounded />
              </IconButton>
              <IconButton
                color="primary"
                className="button-next"
                onClick={() => controlledSwiper2.slideNext()}
              >
                <NavigateNextRounded />
              </IconButton>
              <Swiper
                controller={{ control: controlledSwiper2 }}
                onSwiper={setControlledSwiper2}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                pagination={{
                  clickable: true
                }}
                modules={[Autoplay, Controller]}
              >
                {mockCategories.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Card variant="outlined" sx={{ backgroundColor: primary[50] }}>
                        <CardContent>
                          <ListItem disablePadding>
                            <ListItemAvatar>
                              <Avatar sx={{ bgcolor: primary[500] }}>
                                <BusinessCenterRounded />
                              </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                              primary={
                                <Typography color="primary" fontWeight={700} variant="h5">
                                  {item.name}
                                </Typography>
                              }
                              secondary={`${formatNumber(item.countJobs)} việc làm`}
                            />
                          </ListItem>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </Box>
        </Container>

        <Box sx={{ width: '100%', backgroundColor: '#f3f6f9', p: 5 }}>
          <Container fixed>
            <Box>
              <Typography sx={{ textAlign: 'center', mb: 6 }} variant="h3" fontWeight={700}>
                Tin tuyển dung, việc làm tốt nhất
              </Typography>

              <Box className="swiper-container">
                <IconButton
                  disabled={!controlledSwiper?.isBeginning}
                  color="primary"
                  className="button-prev"
                  onClick={() => {
                    controlledSwiper.slidePrev();
                  }}
                >
                  <NavigateBeforeRounded />
                </IconButton>
                <IconButton
                  disabled={!controlledSwiper?.isEnd}
                  color="primary"
                  className="button-next"
                  onClick={() => controlledSwiper.slideNext()}
                >
                  <NavigateNextRounded />
                </IconButton>
                <Swiper
                  controller={{ control: controlledSwiper }}
                  onSwiper={setControlledSwiper}
                  spaceBetween={30}
                  slidesPerView={3}
                  grid={{
                    rows: 2,
                    fill: 'row'
                  }}
                  pagination={{
                    clickable: true
                  }}
                  modules={[Grid, Controller, Pagination]}
                >
                  {mockCategories.map((item, index) => {
                    return (
                      <SwiperSlide key={index + 1}>
                        <Card
                          onClick={() => navigate('viec-lam/viec-lam-01')}
                          sx={{
                            border: `1px solid transparent`,
                            transition: 'ease-in-out 0.3s',
                            ':hover': {
                              border: `1px solid ${primary[900]}`,
                              cursor: 'pointer'
                            }
                          }}
                        >
                          <CardContent>
                            <Stack>
                              <ListItem disablePadding>
                                <ListItemAvatar>
                                  <Avatar sx={{ bgcolor: primary[500] }}>
                                    <BusinessCenterRounded />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                  primary={
                                    <Typography
                                      data-content={item.name}
                                      sx={{
                                        display: 'inline-block',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        color: 'primary.main',
                                        '::before': {
                                          content: 'attr(data-content)',
                                          color: 'primary.900',
                                          position: 'absolute',
                                          top: '0',
                                          left: '0',
                                          width: '0',
                                          transition: 'width 300ms ease-in-out',
                                          whiteSpace: 'nowrap',
                                          overflow: 'hidden'
                                        },
                                        ':hover': {
                                          '::before': {
                                            width: '100%'
                                          }
                                        }
                                      }}
                                      fontWeight={600}
                                      variant="h6"
                                    >
                                      {item.name}
                                    </Typography>
                                  }
                                  secondary={`${formatNumber(item.countJobs)} việc làm`}
                                />
                              </ListItem>

                              <Stack direction="row" spacing={1}>
                                <Box
                                  sx={{
                                    backgroundColor: '#FFF4F3',
                                    color: '#F81815',
                                    fontWeight: 600,
                                    padding: '5px 10px',
                                    borderRadius: '5px'
                                  }}
                                  icon={false}
                                >
                                  <Typography variant="body1">Urgent</Typography>
                                </Box>
                                <Box
                                  sx={{
                                    backgroundColor: '#E8FFF0',
                                    color: '#00B441',
                                    fontWeight: 600,
                                    padding: '5px 10px',
                                    borderRadius: '5px'
                                  }}
                                  icon={false}
                                >
                                  <Typography variant="body1">Fulltime</Typography>
                                </Box>
                                <Box
                                  sx={{
                                    backgroundColor: '#EBF9FF',
                                    color: '#00A6E5',
                                    fontWeight: 600,
                                    padding: '5px 10px',
                                    borderRadius: '5px'
                                  }}
                                  icon={false}
                                >
                                  <Typography variant="body1">Remote</Typography>
                                </Box>
                                <Box
                                  sx={{
                                    backgroundColor: '#fff8e1',
                                    color: '#ffa000',
                                    fontWeight: 600,
                                    padding: '5px 10px',
                                    borderRadius: '5px'
                                  }}
                                  icon={false}
                                >
                                  <Typography variant="body1">Part Time</Typography>
                                </Box>
                              </Stack>

                              <Stack
                                sx={{
                                  mt: 2
                                }}
                                direction="row"
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                  }}
                                >
                                  <AccessTime color="primary" fontSize="16px" sx={{ mr: 1 }} />
                                  <Typography variant="subtitle1">Còn 3 ngày</Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                  }}
                                >
                                  <Place color="primary" fontSize="16px" sx={{ mr: 1 }} />
                                  <Typography variant="subtitle1">Hồ Chí Minh</Typography>
                                </Box>
                              </Stack>
                            </Stack>
                          </CardContent>
                        </Card>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Box>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default Home;
