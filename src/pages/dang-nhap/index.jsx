import InputField from '@/components/Field/InputField';
import { PersonTwoTone } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Tab,
  Typography,
  Paper
} from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';
import background from '../../assets/background.jpg';

function DangNhapPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.pathname?.includes('/dang-nhap') ? 0 : 1;
  const [value, setValue] = React.useState(state);
  const handleChange = (event, newValue) => {
    navigate(newValue === 0 ? '/dang-nhap' : '/dang-ky');
  };
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      role: 0
    }
  });
  const password = watch('password');

  const { login, errorLogin, signup, errorSignup } = useAuth();

  useEffect(() => {
    setValue(state);
  }, [state]);

  return (
    <Paper fullwidth sx={{height:647,margin: 0}}>
      <Box  data-aos="fade-right" fullwidth sx={{
        height: "100%",
        backgroundImage:`url(${background})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
        }}>
        <Container data-aos="fade-right" sx={{ py:7 }} maxWidth="xs">
          <TabContext value={value}>
            <Card elevation={3}>
              <TabList onChange={handleChange} centered>
                <Tab label="Đăng nhập" />
                <Tab label="Đăng ký" />
              </TabList>
              <Divider />
              <CardContent>
                <Box mt={2} />

                <Typography textAlign="center" variant="h6">
                  Chào mừng bạn đến với VietJob
                </Typography>
                <Typography textAlign="center" variant="subtitle2">
                  Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                </Typography>

                <Divider variant="middle" sx={{ my: 2 }}>
                  <PersonTwoTone />
                </Divider>

                <TabPanel value={0}>
                  <Stack spacing={3}>
                    <InputField name="email" control={control} label="Email" />
                    <InputField type="password" name="password" control={control} label="Mật khẩu" />

                    <Typography textAlign="center" color="error" variant="caption">
                      {errorLogin?.message}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleSubmit(login)}>
                      Đăng nhập
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel value={1}>
                  <Stack spacing={3}>
                    <InputField name="email" control={control} label="Email" />
                    <InputField type="password" name="password" control={control} label="Mật khẩu" />
                    <InputField
                      name="passwordConfirm"
                      type="password"
                      control={control}
                      rules={{
                        validate: (value) => value === password || 'Mật khẩu không khớp'
                      }}
                      label="Xác nhận mật khẩu"
                    />
                    <Typography textAlign="center" color="error" variant="caption">
                      {errorSignup?.message}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleSubmit(signup)}>
                      Đăng ký
                    </Button>
                  </Stack>
                </TabPanel>
              </CardContent>
            </Card>
          </TabContext>
        </Container>
      </Box>
    </Paper>
  );
}

export default DangNhapPage;
