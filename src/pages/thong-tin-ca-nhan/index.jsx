import { useCandidateByUserId, useMutationUpdateCandidate } from '@/hooks/candidate';
import { grey } from '@/theme/themeColors';
import { HorizontalRuleRounded } from '@mui/icons-material';

import { selectUserInfo } from '@/redux/authSlice';
import {
  Box,
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
import { useSelector } from 'react-redux';
import ButtonEdit from './components/ButtonEdit';
import Description from './components/Description';
import InfoUser from './components/InfoUser';
import Education from './components/Education';
import Experience from './components/Eperience';
import Certificate from './components/Certificate';
import Skill from './components/Skill';

const ThongTinCaNhanPage = () => {
  const info = useSelector(selectUserInfo);
  const { data: candidate } = useCandidateByUserId(info?._id);
  const { mutateAsync } = useMutationUpdateCandidate();
  const onSubmitDescription = async (data) => {
    await mutateAsync({
      _id: candidate?._id,
      moreInfo: data.moreInfo
    });
  };
  const infoUser = {
    ...candidate
    // name: candidate?.user?.name,
    // avatar: candidate?.user?.avatar,
    // phoneNumber: candidate?.user?.phoneNumber,
    // email: candidate?.user?.email,
    // birthday: candidate?.user?.birthday ?? null
  };

  const onSubmitUserInfo = async (data) => {
    const { _id, __v, user, province, ...rest } = data;
    const newUser = {
      name: user?.name,
      phoneNumber: user?.phoneNumber,
      email: user?.email,
      birthDay: user?.birthDay
    };
    await mutateAsync({ _id, ...rest, province: province?.value, userId: user._id, user: newUser });
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={4}>
          <InfoUser data={infoUser} onSubmit={onSubmitUserInfo} />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Description data={infoUser} onSubmit={onSubmitDescription} />
          <Box mt={2} />
          <Education data={infoUser} />
          <Box mt={2} />

          <Experience data={infoUser} />
          <Box mt={2} />

          <Certificate data={infoUser} />
          <Box mt={2} />
          <Skill data={infoUser} />
          {/* </Typography> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThongTinCaNhanPage;
