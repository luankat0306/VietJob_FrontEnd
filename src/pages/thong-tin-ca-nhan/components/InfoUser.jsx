import { primary } from '@/theme/themeColors';
import {
  CalendarViewDay,
  EqualizerRounded,
  LayersRounded,
  LocalAtmRounded,
  MailRounded,
  PhoneRounded,
  PlaceRounded
} from '@mui/icons-material';

import LabelWithIcon from '@/components/Base/LabelWithIcon';
import AutocompleteField from '@/components/Field/AutocompleteField';
import DatePickerField from '@/components/Field/DatePickerField';
import InputField from '@/components/Field/InputField';
import FieldLayout from '@/components/FieldLayout';
import { levels, salarys } from '@/utils/optionsData';
import { Avatar, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';
import { formatDate } from '@/utils/format';
import { useProvince, useProvinces } from '@/hooks/province';

const InfoUser = ({ data, onSubmit }) => {
  const { data: menuProvince } = useProvinces({});
  const { data: provinceData } = useProvince(data?.province);

  console.log(menuProvince);

  const { control, reset, handleSubmit } = useForm();

  const info = [
    {
      icon: PhoneRounded,
      title: 'Số điện thoại:',
      content: data?.user?.phoneNumber
    },
    {
      icon: MailRounded,
      title: 'Email:',
      content: data?.user?.email
    },
    {
      icon: CalendarViewDay,
      title: 'Ngày sinh:',
      content: formatDate(data?.user?.birthDay)
    },
    {
      icon: PlaceRounded,
      title: 'Địa chỉ:',
      content: provinceData?.name
    },
    {
      icon: EqualizerRounded,
      title: 'Chức vụ:',
      content: data?.appliedPosition
    },
    {
      icon: LocalAtmRounded,
      title: 'Mức lương:',
      content: data?.wage
    }
  ];
  useEffect(() => {
    reset({
      ...data,
      province: {
        value: provinceData?._id,
        label: provinceData?.name
      }
    });
  }, [data]);
  return (
    <Card sx={{ bgcolor: primary[50] }}>
      <CardContent>
        <Stack alignItems="start" direction="row" spacing={2}>
          <Avatar sx={{ mt: 1, bgcolor: '#fff', width: 56, height: 56 }} variant="rounded">
            {data?.user?.avatar}
          </Avatar>
          <Stack
            sx={{
              flexGrow: 1
            }}
          >
            <Typography variant="h6" fontWeight={500}>
              {data?.user?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {data?.position}
            </Typography>
          </Stack>
          <ButtonEdit
            title="Thông tin cá nhân"
            fullWidth
            maxWidth="sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
              <InputField name="user.name" control={control} label="Tên" />
              <InputField name="user.email" control={control} label="Email" />
              <InputField name="user.phoneNumber" control={control} label="Số điện thoại" />
              <DatePickerField name="user.birthDay" control={control} label="Ngày sinh" />
              <AutocompleteField
                options={levels}
                name="appliedPosition"
                control={control}
                label="Chức vụ"
              />
              <AutocompleteField
                options={salarys}
                name="wage"
                control={control}
                label="Mức lương"
              />
              <AutocompleteField
                options={menuProvince?.map((item) => ({
                  value: item?._id,
                  label: item.name
                }))}
                name="province"
                control={control}
                label="Tỉnh/Thành phố"
              />
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
