import { useCandidateByUserId } from '@/hooks/candidate';
import { grey } from '@/theme/themeColors';
import { HorizontalRuleRounded } from '@mui/icons-material';

import { selectUserInfo } from '@/redux/authSlice';
import {
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import ButtonEdit from './components/ButtonEdit';
import Description from './components/Description';
import InfoUser from './components/InfoUser';

const ThongTinCaNhanPage = () => {
  const info = useSelector(selectUserInfo);
  const { data: candidate } = useCandidateByUserId(info._id);
  const onSubmitDescription = (data) => {
    console.log(data);
  };
  console.log(candidate);
  const infoUser = {
    name: candidate?.user?.name,
    avatar: candidate?.user?.avatar,
    phoneNumber: candidate?.user?.phoneNumber,
    email: candidate?.user?.email,
    address: candidate?.address,
    appliedPosition: candidate?.appliedPosition,

    experience: candidate?.experience,
    wage: candidate?.wage
  };
  return (
    <Container fixed sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={4}>
          <InfoUser data={infoUser} />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Description onSubmit={onSubmitDescription} />
          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Học vấn <ButtonEdit title="Học vấn" />
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
            Kinh nghiệm <ButtonEdit title="Kinh nghiệm" />
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
            Chứng chỉ <ButtonEdit title="Chứng chỉ" />
          </Typography>
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
              Kỹ năng <ButtonEdit title="Kỹ năng" />
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
