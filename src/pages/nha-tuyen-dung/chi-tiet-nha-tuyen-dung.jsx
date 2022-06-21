import * as React from 'react';
import {
  Paper,
  Container,
  Stack,
  Grid as MuiGrid,
  Typography,
  Link,
  Button,
  Pagination,
  TextField
} from '@mui/material';
import { Language, Groups, LocationOn, ContentCopy } from '@mui/icons-material';

import Box from '@mui/material/Box';
import cover from '../../assets/employer-pngs/cmc-cover.jpg';
import avatar from '../../assets/employer-pngs/cmc-avatar.jpg';
import fb from '../../assets/employer-pngs/facebook.png';
import tw from '../../assets/employer-pngs/twitter.png';
import li from '../../assets/employer-pngs/linkedin.png';
import pic1 from '../../assets/employer-pngs/pic1.jpg';
import pic2 from '../../assets/employer-pngs/pic2.jpg';
import pic3 from '../../assets/employer-pngs/pic3.jpg';
import pic4 from '../../assets/employer-pngs/pic4.jpg';
import { primary, secondary } from '../../theme/themeColors';
import JobListingBox from '@/components/JobListingBox/JobListingBox';
import { useParams } from 'react-router-dom';
import { useEmployer } from '@/hooks/employer';
import { useJobs } from '@/hooks/job';

function ChiTietNhaTuyenDungPage() {
  const { id } = useParams();
  const { data: employer } = useEmployer(id);

  const [filter, setFilter] = React.useState({
    page: 1,
    limit: 10,
    employer: id
  });
  const { data: jobs } = useJobs(filter);
  return (
    <Paper sx={{ bgcolor: 'whitesmoke', p: 5 }}>
      <Container>
        <Box sx={{ mb: 3 }}>
          <MuiGrid container>
            <MuiGrid item xs={12}>
              <Box
                component="div"
                fullwidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  borderRadius: 2,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                  
                }}
              >
                <Stack>
                  <Box sx={{ height: 300, position: 'relative'}}>
                    <img
                      src={employer?.user?.cover}
                      loading="lazy"
                      style={{
                        objectFit:"cover",
                        width: '100%',
                        height: 300,
                      }}
                    />
                    <img
                      src={employer?.user?.avatar}
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        position: 'absolute',
                        left: 30,
                        bottom: -70,
                        borderRadius:2,
                        maxWidth: 180,
                        maxHeight: 160,
                        border:`2px solid #e7e7e7`
                      }}
                    />
                  </Box>
                  <Box sx={{ pl: 28, my:1 }}>
                    <MuiGrid container>
                      <MuiGrid item xs>
                        <Box>
                          <Stack spacing={0}>
                            <Typography variant="h6">{employer?.user?.name}</Typography>
                            <Box>
                              <MuiGrid container>
                                <MuiGrid item xs={6}>
                                  <Link
                                    href="#"
                                    underline="hover"
                                    color="inherit"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                  >
                                    <Language sx={{ mr: 1, my: 1 }} />
                                    {employer?.website}
                                  </Link>
                                </MuiGrid>
                                <MuiGrid item xs={6}>
                                  <Typography
                                    variant="p"
                                    sx={{ display: 'flex', alignItems: 'center' }}
                                  >
                                    <Groups sx={{ mr: 1, my: 1 }} />
                                    {employer?.scale}
                                  </Typography>
                                </MuiGrid>
                              </MuiGrid>
                            </Box>
                          </Stack>
                        </Box>
                      </MuiGrid>
                      {/* <MuiGrid item xs={6}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: 2,
                            ml: 20
                          }}
                        >
                          <Button size="large" color="secondary" variant="contained">
                            theo dõi công ty
                          </Button>
                        </Box>
                      </MuiGrid> */}
                    </MuiGrid>
                  </Box>
                </Stack>
              </Box>
            </MuiGrid>
          </MuiGrid>
        </Box>

        <Box>
          <MuiGrid container direction="row" justifyContent="center">
            <MuiGrid item xs={12}>
              <Box
                component="div"
                fullwidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  p: 2,
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`
                }}
              >
                <Box sx={{ pl: 1, borderLeft: `5px solid ${secondary['main']}` }}>
                  <Typography variant="h6">Giới thiệu công ty</Typography>
                </Box>
                <Box sx={{ pt: 2 }}>{employer?.description}</Box>
              </Box>

              <Box
                component="div"
                fullwidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  p: 2,
                  borderRadius: 2,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`
                }}
              >
                <Box sx={{ pl: 1, borderLeft: `5px solid ${secondary['main']}`, mb: 2 }}>
                  <Typography variant="h6">Tuyển Dụng</Typography>
                </Box>
                <Stack>
                  {jobs?.data?.map((item, index) => (
                    <JobListingBox key={index} item={item} />
                  ))}
                 
                </Stack>
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
                    count={Math.floor((jobs?.totalPage ?? 9) / 10) ?? 1}
                    onChange={(event, value) => {
                      setFilter({ ...filter, page: value });
                    }}
                  />
                </Box>
              </Box>
            </MuiGrid>

            {/* <MuiGrid item xs={4}>
              <Box
                component="div"
                fullwidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  p: 2,
                  ml: 3,
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`
                }}
              >
                <Box sx={{ pl: 1, borderLeft: `5px solid ${secondary['main']}` }}>
                  <Typography variant="h6">Địa Chỉ</Typography>
                </Box>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="subtitle" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn color="secondary" sx={{ mr: 1, my: 1 }} />
                    Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội
                  </Typography>
                </Box>
              </Box>

              <Box
                component="div"
                fullwidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  p: 2,
                  ml: 3,
                  mb: 3,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                  borderRadius: 2
                }}
              >
                <Box sx={{ pl: 1, borderLeft: `5px solid ${secondary['main']}` }}>
                  <Typography variant="h6">Chia Sẻ Công Ty</Typography>
                </Box>
                <Box sx={{ pt: 2 }}>
                  <Typography variant="p" component="div" sx={{ pb: 2 }}>
                    Sao chép đường dẫn
                  </Typography>
                  <MuiGrid container xs={12}>
                    <MuiGrid item xs={10}>
                      <TextField
                        fullWidth
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue="https://www.topcv.vn/cong-ty/cong-ty-tnhh-cmc-global/2872.html"
                        variant="filled"
                        size="small"
                      />
                    </MuiGrid>
                    <MuiGrid item xs={2} justifyContent="center" alignItems="center">
                      <Button size="small" variant="contained" color="secondary">
                        <ContentCopy fontSize="small" sx={{ mr: 0.5, my: 0.5 }} />
                      </Button>
                    </MuiGrid>
                  </MuiGrid>
                  <Typography variant="p" component="div" sx={{ py: 2 }}>
                    Chia sẻ qua mạng xã hội
                  </Typography>
                  <MuiGrid container xs={12} justifyContent="flex-start" alignItems="center">
                    <MuiGrid item xs={2}>
                      <Link href="#">
                        <img src={fb} width="40" />
                      </Link>
                    </MuiGrid>
                    <MuiGrid item xs={2}>
                      <Link href="#">
                        <img src={tw} width="40" />
                      </Link>
                    </MuiGrid>
                    <MuiGrid item xs={2}>
                      <Link href="#">
                        <img src={li} width="40" />
                      </Link>
                    </MuiGrid>
                  </MuiGrid>
                </Box>
              </Box>
              <Box
                component="div"
                fullWidth
                sx={{
                  height: 'auto',
                  bgcolor: 'white',
                  p: 2,
                  ml: 3,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                  borderRadius: 2
                }}
              >
                <Box sx={{ pl: 1, borderLeft: `5px solid ${secondary['main']}` }}>
                  <Typography variant="h6">Hình Ảnh</Typography>
                </Box>
                <Box sx={{ pt: 2 }}>
                  <Stack spacing={2}>
                    <img loading="lazy" src={pic1} />
                    <img loading="lazy" src={pic2} />
                    <img loading="lazy" src={pic3} />
                    <img loading="lazy" src={pic4} />
                  </Stack>
                </Box>
              </Box>
            </MuiGrid> */}
          </MuiGrid>
        </Box>
      </Container>
    </Paper>
  );
}
export default ChiTietNhaTuyenDungPage;
