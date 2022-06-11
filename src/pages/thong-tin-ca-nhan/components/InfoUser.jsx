import { primary } from '@/theme/themeColors';
import {
  EqualizerRounded,
  LayersRounded,
  LocalAtmRounded,
  MailRounded,
  PhoneRounded,
  PlaceRounded
} from '@mui/icons-material';

import LabelWithIcon from '@/components/Base/LabelWithIcon';
import { Avatar, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import ButtonEdit from './ButtonEdit';
import { useForm } from 'react-hook-form';
import FieldLayout from '@/components/FieldLayout';
import InputField from '@/components/Field/InputField';

const InfoUser = ({ data, onSubmit }) => {
  const { control } = useForm();

  const info = [
    {
      icon: PhoneRounded,
      title: 'Số điện thoại:',
      content: data?.phoneNumber
    },
    {
      icon: MailRounded,
      title: 'Email:',
      content: data?.email
    },
    {
      icon: PlaceRounded,
      title: 'Địa chỉ:',
      content: data?.address
    },
    {
      icon: EqualizerRounded,
      title: 'Chức vụ:',
      content: data?.appliedPosition
    },
    {
      icon: LayersRounded,
      title: 'Kinh nghiệm:',
      content: data?.experience
    },
    {
      icon: LocalAtmRounded,
      title: 'Mức lương:',
      content: data?.wage
    }
  ];
  return (
    <Card variant="outlined" sx={{ bgcolor: primary[50] }}>
      <CardContent>
        <Stack alignItems="start" direction="row" spacing={2}>
          <Avatar sx={{ mt: 1, bgcolor: '#fff', width: 56, height: 56 }} variant="rounded">
            {data?.avatar}
          </Avatar>
          <Stack
            sx={{
              flexGrow: 1
            }}
          >
            <Typography variant="h6" fontWeight={500}>
              {data?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {data?.position}
            </Typography>
          </Stack>
          <ButtonEdit title="Thông tin cá nhân" fullWidth maxWidth="sm">
            <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
              <InputField name="name" control={control} label="Tên" />
              <InputField name="email" control={control} label="Email" />
              <InputField name="phoneNumber" control={control} label="Số điện thoại" />
              <InputField name="birthDay" control={control} label="Ngày sinh" />
              <InputField name="appliedPosition" control={control} label="Chức vụ" />
              <InputField name="wage" control={control} label="Mức lương" />
            </FieldLayout>
          </ButtonEdit>
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
  );
};

export default InfoUser;
