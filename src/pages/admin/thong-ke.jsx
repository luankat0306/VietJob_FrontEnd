import * as React from 'react';
import {
  Paper,
  Container,
  Box,
  Typography,
  Grid as MuiGrid,
  Avatar,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  WorkOutline,
  ArticleOutlined,
  BookmarkBorderOutlined,
  CloseOutlined
} from '@mui/icons-material';
import { useAdminChart, useAdminCount } from '@/hooks/admin';
import { useApplications } from '@/hooks/application';
import { Chart } from './components/Chart';

function createData(name, job) {
  return { name, job };
}

const lists = [
  createData('Tyrone Lowe', 'Software Engineer'),
  createData('Kaedyn Fraser', 'Web Developer'),
  createData('Harold Adams', 'Technical Architect'),
  createData('Joshua Mcnair', 'UI Designer'),
  createData('Kathryn Mcgee', 'Senior Product Designer'),
  createData('Tyrone Lowe', 'Software Engineer'),
  createData('Kaedyn Fraser', 'Web Developer'),
  createData('Harold Adams', 'Technical Architect'),
  createData('Joshua Mcnair', 'UI Designer'),
  createData('Kathryn Mcgee', 'Senior Product Designer'),
  createData('Tyrone Lowe', 'Software Engineer'),
  createData('Kaedyn Fraser', 'Web Developer'),
  createData('Harold Adams', 'Technical Architect'),
  createData('Joshua Mcnair', 'UI Designer'),
  createData('Kathryn Mcgee', 'Senior Product Designer'),
  createData('Tyrone Lowe', 'Software Engineer'),
  createData('Kaedyn Fraser', 'Web Developer'),
  createData('Harold Adams', 'Technical Architect'),
  createData('Joshua Mcnair', 'UI Designer'),
  createData('Kathryn Mcgee', 'Senior Product Designer')
];

function ThongKeAdminPage() {
  const { isLoading: loadingChart, data: chart } = useAdminChart();
  const { isLoading: loadingCount, data: count } = useAdminCount();
  const { data: applications } = useApplications({});
  return (
    <Container>
      <Box fullwidth data-aos="fade-right">
        <MuiGrid container spacing={2}>
          <MuiGrid container item xs={12} data-aos="fade-right" spacing={2}>
            <MuiGrid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 130,
                  bgcolor: 'secondary.main',
                  borderRadius: 2
                }}
              >
                <MuiGrid item container sx={{ height: 'inherit' }}>
                  <MuiGrid
                    item
                    xs={4}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
                      <WorkOutline fontSize="large" sx={{ color: 'secondary.main' }} />
                    </Avatar>
                  </MuiGrid>

                  <MuiGrid
                    item
                    xs={8}
                    container
                    direction="column"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
                  >
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="subtitle1" color="white">
                        Số việc làm
                      </Typography>
                    </MuiGrid>
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="h5" color="white" fontWeight="700" letterSpacing={3}>
                        {count?.postTotal}
                      </Typography>
                    </MuiGrid>
                  </MuiGrid>
                </MuiGrid>
              </Box>
            </MuiGrid>
            <MuiGrid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 130,
                  bgcolor: 'success.dark',
                  borderRadius: 2
                }}
              >
                <MuiGrid item container sx={{ height: 'inherit' }}>
                  <MuiGrid
                    item
                    xs={4}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
                      <ArticleOutlined fontSize="large" sx={{ color: 'success.dark' }} />
                    </Avatar>
                  </MuiGrid>

                  <MuiGrid
                    item
                    xs={8}
                    container
                    direction="column"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
                  >
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="subtitle1" color="white">
                        Số nhà tuyển dụng
                      </Typography>
                    </MuiGrid>
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="h5" color="white" fontWeight="700" letterSpacing={3}>
                        {count?.employerTotal}
                      </Typography>
                    </MuiGrid>
                  </MuiGrid>
                </MuiGrid>
              </Box>
            </MuiGrid>
            <MuiGrid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 130,
                  bgcolor: 'error.dark',
                  borderRadius: 2
                }}
              >
                <MuiGrid item container sx={{ height: 'inherit' }}>
                  <MuiGrid
                    item
                    xs={4}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
                      <ArticleOutlined fontSize="large" sx={{ color: 'error.dark' }} />
                    </Avatar>
                  </MuiGrid>

                  <MuiGrid
                    item
                    xs={8}
                    container
                    direction="column"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
                  >
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="subtitle1" color="white">
                        Số người tìm việc
                      </Typography>
                    </MuiGrid>
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="h5" color="white" fontWeight="700" letterSpacing={3}>
                        {count?.candidateTotal}
                      </Typography>
                    </MuiGrid>
                  </MuiGrid>
                </MuiGrid>
              </Box>
            </MuiGrid>
            <MuiGrid item xs={3}>
              <Box
                sx={{
                  width: '100%',
                  height: 130,
                  bgcolor: 'primary.dark',
                  borderRadius: 2
                }}
              >
                <MuiGrid item container sx={{ height: 'inherit' }}>
                  <MuiGrid
                    item
                    xs={4}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
                      <ArticleOutlined fontSize="large" sx={{ color: 'primary.dark' }} />
                    </Avatar>
                  </MuiGrid>

                  <MuiGrid
                    item
                    xs={8}
                    container
                    direction="column"
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
                  >
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="subtitle1" color="white">
                        Số người đã ứng tuyển
                      </Typography>
                    </MuiGrid>
                    <MuiGrid item xs={2} sx={{ wordBreak: 'break-word' }}>
                      <Typography variant="h5" color="white" fontWeight="700" letterSpacing={3}>
                        {count?.applicationTotal}
                      </Typography>
                    </MuiGrid>
                  </MuiGrid>
                </MuiGrid>
              </Box>
            </MuiGrid>
          </MuiGrid>
          <MuiGrid item xs={6} data-aos="fade-right">
            <Box sx={{ bgcolor: 'white' }} data-aos="fade-right">
              <Box sx={{ p: 3, borderBottom: `1px solid #e7e7e7` }}>
                <Chart data={chart} />
              </Box>
            </Box>
          </MuiGrid>

          <MuiGrid item xs={6} data-aos="fade-right">
            <Box sx={{ bgcolor: 'white' }} data-aos="fade-right">
              <Box sx={{ p: 3, borderBottom: `1px solid #e7e7e7` }}>
                <Typography variant="h6">Người Tìm Việc Ứng Tuyển Gần Đây</Typography>
              </Box>
              <List>
                {applications?.data.map((list) => (
                  <ListItem
                    key={list.name}
                    sx={{
                      borderBottom: `1px solid #e7e7e7`,
                      transition: 'ease-in-out 0.3s',
                      ':hover': {
                        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                        '.avatar': {
                          bgcolor: 'primary.main'
                        },
                        '.icon': {
                          color: 'white'
                        },
                        '.close': {
                          visibility: 'visible'
                        }
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar className="avatar" sx={{ transition: 'ease-in-out 0.3s' }}>
                        <BookmarkBorderOutlined
                          className="icon"
                          sx={{ transition: 'ease-in-out 0.3s', color: 'primary.main' }}
                        />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText>
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle2">{list?.candidate?.user?.name}</Typography>
                        <Typography variant="body1" color="#646464">
                          đã ứng tuyển vị trí
                        </Typography>
                        <Typography variant="subtitle2" color="primary">
                          {list?.post?.title}
                        </Typography>
                      </Stack>
                    </ListItemText>

                    {/* <Tooltip title="Xoá" placement="left">
                      <IconButton edge="end">
                        <CloseOutlined
                          className="close"
                          fontSize="small"
                          sx={{ transition: 'ease-in-out 0.3s', visibility: 'hidden' }}
                        />
                      </IconButton>
                    </Tooltip> */}
                  </ListItem>
                ))}
              </List>
            </Box>
          </MuiGrid>
        </MuiGrid>
      </Box>
    </Container>
  );
}
export default ThongKeAdminPage;
