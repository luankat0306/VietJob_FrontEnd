import InputField from '@/components/Field/InputField';
import { PersonTwoTone } from '@mui/icons-material';
import { TabContext } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import background from '../../assets/background.jpg';
import useAuth from '../../hooks/auth/useAuth';

function DangNhapAdminPage() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      email: '',
      password: '',
      role: 3
    }
  });
  const { login, errorLogin } = useAuth();

  return (
    <Box
      sx={{
        heigth: '100%',
        minHeight: 'calc(100vh - 64px)',
        margin: 0,
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }}
    >
      <Container data-aos="fade-right" sx={{ py: 7, mt: '15%' }} maxWidth="xs">
        <Card elevation={3}>
          <CardContent>
            <Box mt={2} />

            <Typography textAlign="center" variant="h6">
              Đăng nhập - Admin
            </Typography>

            <Divider variant="middle" sx={{ my: 2 }}>
              <PersonTwoTone />
            </Divider>

            <Stack spacing={3}>
              <InputField name="email" control={control} label="Email" />
              <InputField type="password" name="password" control={control} label="Mật khẩu" />

              <Typography textAlign="center" color="error" variant="caption">
                {errorLogin?.message}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit((data) => login({ ...data, role: 3 }))}
              >
                Đăng nhập
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default DangNhapAdminPage;
