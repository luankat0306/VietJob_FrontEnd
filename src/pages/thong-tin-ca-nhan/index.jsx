import React from 'react';
import {
  AssignmentIndRounded,
  EqualizerRounded,
  HorizontalRuleRounded,
  InsertInvitationRounded,
  LayersRounded,
  LocalAtmRounded,
  LocationCityRounded,
  MoreTimeRounded
} from '@mui/icons-material';
import { grey, primary } from '@/theme/themeColors';

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography
} from '@mui/material';
import LabelWithIcon from '@/components/Base/LabelWithIcon';

const ThongTinCaNhanPage = () => {
  const info = [
    {
      icon: MoreTimeRounded,
      title: 'Ngày đăng:',
      content: '12/12/2020'
    },
    {
      icon: InsertInvitationRounded,
      title: 'Ngày hết hạn:',
      content: '18/12/2022'
    },
    {
      icon: LocationCityRounded,
      title: 'Địa điểm:',
      content: 'Hồ Chí Minh'
    },
    {
      icon: EqualizerRounded,
      title: 'Chức vụ:',
      content: 'Nhân viên'
    },
    {
      icon: LayersRounded,
      title: 'Kinh nghiệm:',
      content: '+ 1 năm kinh nghiệm'
    },
    {
      icon: LocalAtmRounded,
      title: 'Mức lương:',
      content: '10 - 15 triệu'
    },
    {
      icon: AssignmentIndRounded,
      title: 'Số lượng:',
      content: '0/10'
    }
  ];

  return (
    <Container fixed sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={4}>
          <Card variant="outlined" sx={{ bgcolor: primary[50] }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ mt: 1, bgcolor: '#fff', width: 56, height: 56 }} variant="rounded">
                  N
                </Avatar>
                <Stack>
                  <Typography variant="h6" fontWeight={500}>
                    Võ Trí Luân
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Software Engineer
                  </Typography>
                </Stack>
              </Stack>
              <Divider sx={{ my: 2, borderColor: primary[100] }} />
              {info.map(({ icon: Icon, title, content }) => {
                return (
                  <>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <LabelWithIcon>
                        <Icon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textPrimary">
                          <strong>{title}</strong>
                        </Typography>
                      </LabelWithIcon>

                      <Typography variant="body2" color="GrayText">
                        <strong>{content}</strong>
                      </Typography>
                    </Stack>
                    <Divider sx={{ my: 2, borderColor: primary[100] }} />
                  </>
                );
              })}
              {/* <Box mt={4} display="flex" justifyContent="center"> */}
              <Button fullWidth size="large" variant="contained" color="primary">
                Liên hệ
              </Button>
              {/* </Box> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Typography component="div" variant="h6" fontWeight={700}>
            Giới thiệu bản thân
          </Typography>
          <Typography mt={2} component="div" variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea taki mata
            sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet consetetur.
          </Typography>

          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Học vấn:
          </Typography>
          {/* <Typography mt={2} component="div" variant="body2" color="textSecondary"> */}
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Lorem decore nullam te eum id evertitur reformidans sea id possit principes.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </ListItem>
          </List>

          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Kinh nghiệm:
          </Typography>
          {/* <Typography mt={2} component="div" variant="body2" color="textSecondary"> */}
          <List disablePadding>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Lorem decore nullam te eum id evertitur reformidans sea id possit principes.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat.
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon
                sx={{
                  '&.MuiListItemIcon-root': {
                    minWidth: '32px'
                  }
                }}
              >
                <HorizontalRuleRounded color="primary" />
              </ListItemIcon>
              Sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat.
            </ListItem>
          </List>

          <Divider sx={{ mt: 2 }} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography my={2} component="div" variant="h6" fontWeight={700}>
              Kỹ năng:
            </Typography>
            <Card
              variant="outlined"
              sx={{
                p: 1,
                bgcolor: grey[200],
                color: grey[600],
                fontWeight: 700
              }}
            >
              React
            </Card>
            <Card
              variant="outlined"
              sx={{
                p: 1,
                bgcolor: grey[200],
                color: grey[600],
                fontWeight: 700
              }}
            >
              NodeJs
            </Card>
          </Stack>

          <Divider />

          {/* </Typography> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThongTinCaNhanPage;
