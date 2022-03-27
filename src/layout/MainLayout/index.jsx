import {
  BusinessCenterRounded,
  NavigateBeforeRounded,
  NavigateNextRounded
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid as MuiGrid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Autoplay, Controller, Grid, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner-1.png';
import banner from '../../assets/banner.svg';
import { grey, primary } from '../../theme/themeColors';
import { formatNumber } from '../../utils/format';
import { Header } from '../Header';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

const Banner = () => {
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
  console.log(controlledSwiper);
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={8}>
      <Box
        onMouseMove={(e) => {
          document.querySelectorAll('.layer').forEach((layer) => {
            const speed = layer.getAttribute('data-speed');

            const x = (window.innerWidth - e.pageX * speed) / 200;
            const y = (window.innerHeight - e.pageY * speed) / 200;

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            layer.style.transition = 'esase .5s';
          });
        }}
        sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
      >
        <MuiGrid container spacing={1} sx={{ mx: 24 }}>
          <MuiGrid item xs={4}>
            <Stack data-speed="-2" className="layer" direction="column" mt={'280px'}>
              <Typography data-aos="fade-right" variant="h2" fontWeight={700}>
                Tìm việc làm phù hợp với bạn
              </Typography>
              <Box mt={4} />
              <Typography data-aos="fade-right" variant="p">
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
              </Typography>
              <Box mt={4} />

              <Card sx={{ p: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <TextField
                    sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
                    fullWidth
                    label="Tên công việc, vị trí muốn ứng tuyển"
                  />
                  <TextField
                    sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
                    select
                    fullWidth
                    label="Thành phố"
                  />
                  <TextField
                    sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
                    select
                    fullWidth
                    label="Ngành nghề"
                  />
                  <Box>
                    <Button sx={{ width: '96px' }} variant="contained" color="primary">
                      Tìm Kiếm
                    </Button>
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <img data-speed="-2" className="layer" src={banner1} />
          </MuiGrid>
        </MuiGrid>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1
          }}
        >
          <img
            style={{
              verticalAlign: 'middle',
              width: '100%',
              height: 'auto',
              display: 'inline-block'
            }}
            src={banner}
          ></img>
        </Box>
      </Box>

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
                    <Card variant="outlined" sx={{ backgroundColor: primary[100] }}>
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

      <Box sx={{ width: '100%', backgroundColor: '#f3f6f9', p: 6 }}>
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
                      <Card>
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
      </Box>
    </Stack>
  );
};
