import { primary } from '@/theme/themeColors';
import {
  CalendarViewDay,
  EqualizerRounded,
  LayersRounded,
  LocalAtmRounded,
  MailRounded,
  PhoneRounded,
  PlaceRounded,
  Link,
  Group
} from '@mui/icons-material';

import LabelWithIcon from '@/components/Base/LabelWithIcon';
import AutocompleteField from '@/components/Field/AutocompleteField';
import DatePickerField from '@/components/Field/DatePickerField';
import InputField from '@/components/Field/InputField';
import FieldLayout from '@/components/FieldLayout';
import { levels, salaries } from '@/utils/optionsData';
import { Avatar, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';
import { formatDate } from '@/utils/format';
import { useProvince, useProvinces } from '@/hooks/province';
import UploadField from '@/components/Field/UploadField';
import { Box } from '@mui/system';

const InfoUser = ({ data, onSubmit }) => {
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
      icon: Link,
      title: 'Website',
      content: data?.website
    },
    {
      icon: Group,
      title: 'Quy mô',
      content: data?.scale
    }
    // {
    //   icon: PlaceRounded,
    //   title: 'Địa chỉ:',
    //   content: provinceData?.name
    // },
    // {
    //   icon: EqualizerRounded,
    //   title: 'Cấp bậc:',
    //   content: data?.appliedPosition
    // },
    // {
    //   icon: LocalAtmRounded,
    //   title: 'Mức lương:',
    //   content: data?.wage
    // }
  ];
  useEffect(() => {
    reset({
      ...data
    });
  }, [data]);
  return (
    <Card sx={{ bgcolor: primary[50] }}>
      <CardContent>
        <Stack alignItems="start" direction="row" spacing={2}>
          <Avatar
            src={data?.user?.avatar}
            sx={{ mt: 1, width: 56, height: 56, bgcolor: '#fff', color: primary['main'] }}
            variant="rounded"
          >
            {data?.user?.name?.[0]}
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
              <InputField name="website" control={control} label="Website" />
              <InputField name="scale" control={control} label="Quy mô" />
              <UploadField
                allowMultiple={false}
                control={control}
                name="user.avatar"
                label="Ảnh đại diện"
              />
              <UploadField
                allowMultiple={false}
                control={control}
                name="user.cover"
                label="Ảnh bìa"
              />
            </FieldLayout>
          </ButtonEdit>
        </Stack>
        <Divider sx={{ my: 2, borderColor: primary[100] }} />
        {info.map(({ icon: Icon, title, content }) => {
          return (
            <Fragment key={title}>
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
            </Fragment>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default InfoUser;
