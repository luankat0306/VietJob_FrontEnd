import { useEmployerByUserId, useMutationUpdateEmployer } from '@/hooks/employer';

import { selectUserInfo } from '@/redux/authSlice';
import { Box, Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Certificate from './components/Certificate';
import Description from './components/Description';
import Education from './components/Education';
import Experience from './components/Eperience';
import InfoUser from './components/InfoUser';
import Skill from './components/Skill';

const ThongTinCaNhanPage = () => {
  const info = useSelector(selectUserInfo);
  const { data: employer } = useEmployerByUserId(info?._id);
  const { mutateAsync } = useMutationUpdateEmployer();
  const onSubmitDescription = async (data) => {
    await mutateAsync({
      _id: employer?._id,
      description: data.description
    });
  };
  const infoUser = {
    ...employer
    // name: employer?.user?.name,
    // avatar: employer?.user?.avatar,
    // phoneNumber: employer?.user?.phoneNumber,
    // email: employer?.user?.email,
    // birthday: employer?.user?.birthday ?? null
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
          {/* <Education data={infoUser} />
          <Box mt={2} />

          <Experience data={infoUser} />
          <Box mt={2} />

          <Certificate data={infoUser} />
          <Box mt={2} />
          <Skill data={infoUser} /> */}
          {/* </Typography> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThongTinCaNhanPage;
