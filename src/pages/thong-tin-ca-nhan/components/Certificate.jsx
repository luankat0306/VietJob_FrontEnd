import CKEditorField from '@/components/Field/CKEditorField';
import InputField from '@/components/Field/InputField';
import UploadField from '@/components/Field/UploadField';
import FieldLayout from '@/components/FieldLayout';
import {
  useCertificates,
  useMutationCreateCertificate,
  useMutationDeleteCertificate,
  useMutationUpdateCertificate
} from '@/hooks/certificate';
import useUploadFile from '@/hooks/uploadFile';
import { Add, Image } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Card, CardContent, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';
import ButtonViewImage from './ButtonViewImage';

const Certificate = ({ data }) => {
  const { data: certificates = [] } = useCertificates({ candidateId: data?._id });
  const { mutateAsync: mutateCreate, isLoading: isLoadingCreate } = useMutationCreateCertificate();
  const { mutateAsync: mutateUpdate, isLoading: isLoadingUpdate } = useMutationUpdateCertificate();
  const { mutateAsync: mutateDelete, isLoading: isLoadingDelete } = useMutationDeleteCertificate();
  const { uploadFile } = useUploadFile();
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      title: '',
      image: '',
      description: ''
    }
  });
  const [showEdit, setShowEdit] = useState('');

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
                  <ButtonViewImage
                    image={certificate.image}
                    onClick={() => setShowEdit('')}
                    maxWidth="sm"
                    title="Đính kèm"
                  />
                  <ButtonEdit
                    isLoading={isLoadingUpdate}
                    fullWidth
                    maxWidth="sm"
                    title="Chứng chỉ"
                    onClick={async () => {
                      const certificate = certificates.find((item) => item._id === showEdit);
                      if (certificate) {
                        const { __v, candidate, ...rest } = certificate;
                        reset({ ...rest, candidateId: candidate });
                      }
                      setShowEdit('');
                    }}
                    sx={{
                      display: showEdit === certificate._id ? 'inline-flex' : 'none'
                    }}
                    onSubmit={handleSubmit(mutateUpdate)}
                  >
                    <CertificateEditForm control={control} />
                  </ButtonEdit>
                  <ButtonEdit
                    isDelete
                    isLoading={isLoadingDelete}
                    fullWidth
                    maxWidth="sm"
                    title="Xoá chứng chỉ"
                    sx={{
                      display: showEdit === certificate._id ? 'inline-flex' : 'none',
                      ml: 2
                    }}
                    onClick={() => setShowEdit('')}
                    onSubmit={() => {
                      const certificate = certificates.find((item) => item._id === showEdit);
                      if (certificate) {
                        mutateDelete(certificate._id);
                      }
                      setShowEdit('');
                    }}
                  >
                    <Typography variant="body2" color="textSecondary">
                      Bạn có chắc chắn muốn xoá chứng chỉ này?
                    </Typography>
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
            isLoading={isLoadingCreate}
            onClick={() => {
              reset({
                title: '',
                image: '',
                description: '',
                candidateId: data?._id
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
            onSubmit={handleSubmit(mutateCreate)}
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
