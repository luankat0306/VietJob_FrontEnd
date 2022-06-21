import Banner from '@/components/Banner';
import { CardJob } from '@/components/CardJob';
import { useCountJobCareer } from '@/hooks/career';
import { useJobs } from '@/hooks/job';
import {
  BusinessCenterRounded,
  NavigateBeforeRounded,
  NavigateNextRounded
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
  Typography,
  Grid,
  Pagination,
  Skeleton
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { primary } from '../../theme/themeColors';
import { formatNumber } from '../../utils/format';
function Home() {
  const { data } = useCountJobCareer();

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper2, setControlledSwiper2] = useState(null);

  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    page: 1,
    limit: 6
  });
  const { data: jobs, isLoading } = useJobs(filter);

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
                {data?.map((item, index) => {
                  return (
                    <SwiperSlide key={item?.name}>
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
                              secondary={`${formatNumber(item.count)} việc làm`}
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
                Tin tuyển dụng, việc làm tốt nhất
              </Typography>

              <Grid container spacing={2}>
                {isLoading
                  ? Array.from({ length: 6 }).map((_, index) => (
                      <Grid item xs={12} md={6} key={index}>
                        <Skeleton height={'181px'} variant="rectangular" />
                      </Grid>
                    ))
                  : jobs?.data?.map((job, index) => (
                      <Grid key={index} item xs={12} md={6}>
                        <CardJob
                          item={{
                            id: job._id,
                            name: job.title,
                            enterpriseName: job?.employer?.user?.name,
                            formality: job.formality,
                            wage: job.wage,
                            experience: job.experience,
                            deadline: job.deadline,
                            avatar: job?.employer?.user?.avatar
                          }}
                        />
                      </Grid>
                    ))}
              </Grid>
              <Box mt={2} />
              <Stack justifyContent="center" direction="row">
                <Pagination
                  variant="text"
                  page={filter.page}
                  count={Math.floor((jobs?.totalPage ?? 9) / 10)}
                  onChange={(event, value) => {
                    setFilter({ ...filter, page: value });
                  }}
                />
              </Stack>
            </Box>
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default Home;
