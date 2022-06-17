import UploadFile from '@/components/Base/UploadFile';
import CKEditorField from '@/components/Field/CKEditorField';
import DatePickerField from '@/components/Field/DatePickerField';
import InputField from '@/components/Field/InputField';
import UploadField from '@/components/Field/UploadField';
import FieldLayout from '@/components/FieldLayout';
import {
  useCertificates,
  useMutationCreateCertificate,
  useMutationUpdateCertificate
} from '@/hooks/certificate';
import { formatDate } from '@/utils/format';
import { Add, Image, ImageAspectRatio, Upload } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Card, CardContent, Icon, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';

const Certificate = ({ data }) => {
  const { data: certificates = [] } = useCertificates({ candidateId: data?._id });
  const { mutateAsync: mutateCreate } = useMutationCreateCertificate();
  const { mutateAsync: mutateUpdate } = useMutationUpdateCertificate();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      image: '',
      description: ''
    }
  });
  const [showEdit, setShowEdit] = useState('');
  const onSubmitCreate = async (values) => {
    await mutateCreate({ ...values, candidateId: data?._id });
  };

  const onSubmitUpdate = async (values) => {
    const { __v, candidate, ...rest } = values;
    await mutateUpdate({ ...rest, candidateId: candidate });
  };

  return (
    <Card>
      <CardContent>
        <Typography component="div" variant="h6" fontWeight={700}>
          Chứng chỉ
        </Typography>
        <div />
        <Timeline position="right">
          {certificates.map((certificate) => (
            <TimelineItem
              key={certificate._id}
              sx={{
                '&.MuiTimelineItem-root': {
                  '::before': {
                    content: 'initial'
                  }
                }
              }}
              onMouseEnter={() => setShowEdit(certificate._id)}
              onMouseLeave={() => setShowEdit('')}
            >
              <TimelineSeparator>
                <TimelineDot sx={{ mt: 2 }} color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Typography pt={0} component="div" variant="h6" color="textSecondary">
                    {certificate.title}
                  </Typography>
                  {/* {showEdit === certificate._id && ( */}
                  <Tooltip title="Ảnh đính kèm">
                    <IconButton size="small">
                      <Image fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <ButtonEdit
                    fullWidth
                    maxWidth="sm"
                    title="Chứng chỉ"
                    onClick={() => {
                      setShowEdit('');
                      const certificate = certificates.find((item) => item._id === showEdit);
                      if (certificate) {
                        reset(certificate);
                      }
                    }}
                    sx={{
                      display: showEdit === certificate._id ? 'inline-flex' : 'none'
                    }}
                    onSubmit={handleSubmit(onSubmitUpdate)}
                  >
                    <CertificateEditForm control={control} />
                  </ButtonEdit>

                  {/* )} */}
                </Stack>
                {/* <Typography component="div" variant="body2" color="textSecondary">
                  {formatDate(certificate.dateStart)} - {formatDate(certificate.dateEnd)}
                </Typography> */}
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: certificate.description
                  }}
                  component="div"
                  variant="body2"
                  color="textSecondary"
                />
              </TimelineContent>
            </TimelineItem>
          ))}
          <ButtonEdit
            onClick={() => {
              reset({
                title: '',
                image: '',
                description: ''
              });
            }}
            button={
              <TimelineItem
                sx={{
                  '&.MuiTimelineItem-root': {
                    minHeight: '0px',
                    '::before': {
                      content: 'initial'
                    }
                  }
                }}
              >
                <TimelineSeparator>
                  <TimelineDot sx={{ p: 0 }} color="primary">
                    <Add
                      sx={{
                        fontSize: '10px'
                      }}
                    />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    fontWeight="bold"
                    mt={'2px'}
                    component="div"
                    variant="body2"
                    color="primary"
                  >
                    Thêm chứng chỉ
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            }
            fullWidth
            maxWidth="sm"
            title="Chứng chỉ"
            onSubmit={handleSubmit(onSubmitCreate)}
          >
            <CertificateEditForm control={control} />
          </ButtonEdit>
        </Timeline>
      </CardContent>
    </Card>
  );
};

const CertificateEditForm = ({ control }) => {
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <InputField
        label="Tiêu đề"
        name="title"
        control={control}
        placholder="Đại học Công nghệ TP.Hồ Chí Minh - HUTECH"
      />
      <UploadField allowMultiple={false} control={control} name="image" />
      <CKEditorField
        label="Mô tả"
        name="description"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
    </FieldLayout>
  );
};

export default Certificate;
