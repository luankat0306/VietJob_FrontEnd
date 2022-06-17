import CheckboxField from '@/components/Field/CheckboxField';
import CKEditorField from '@/components/Field/CKEditorField';
import DatePickerField from '@/components/Field/DatePickerField';
import InputField from '@/components/Field/InputField';
import FieldLayout from '@/components/FieldLayout';
import {
  useEducations,
  useMutationCreateEducation,
  useMutationUpdateEducation
} from '@/hooks/education';
import { formatDate } from '@/utils/format';
import { Add } from '@mui/icons-material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@mui/lab';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';

const Education = ({ data }) => {
  const { data: educations = [] } = useEducations({ candidateId: data?._id });
  const { mutateAsync: mutateCreate } = useMutationCreateEducation();
  const { mutateAsync: mutateUpdate } = useMutationUpdateEducation();
  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      title: '',
      dateStart: null,
      dateEnd: null,
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

  useEffect(() => {
    const education = educations.find((item) => item._id === showEdit);
    if (education) {
      reset(education);
    } else {
      console.log('reset');
      reset({
        title: '',
        dateStart: null,
        dateEnd: null,
        description: ''
      });
    }
  }, [showEdit]);

  return (
    <Card>
      <CardContent>
        <Typography component="div" variant="h6" fontWeight={700}>
          Học vấn
        </Typography>
        <div />
        <Timeline position="right">
          {educations.map((education) => (
            <TimelineItem
              key={education._id}
              sx={{
                '&.MuiTimelineItem-root': {
                  '::before': {
                    content: 'initial'
                  }
                }
              }}
              onMouseEnter={() => setShowEdit(education._id)}
              onMouseLeave={() => setShowEdit('')}
            >
              <TimelineSeparator>
                <TimelineDot sx={{ mt: 2 }} color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack direction="row" spacing={1}>
                  <Typography pt={0} component="div" variant="h6" color="textSecondary">
                    {education.title}
                  </Typography>
                  {/* {showEdit === education._id && ( */}
                  <ButtonEdit
                    fullWidth
                    maxWidth="sm"
                    title="Học vấn"
                    onClick={() => {
                      setShowEdit('');
                    }}
                    sx={{
                      display: showEdit === education._id ? 'inline-flex' : 'none'
                    }}
                    onSubmit={handleSubmit(onSubmitUpdate)}
                  >
                    <EducationEditForm watch={watch} control={control} />
                  </ButtonEdit>
                  {/* )} */}
                </Stack>
                <Typography component="div" variant="body2" color="textSecondary">
                  {formatDate(education.dateStart)} - {formatDate(education.dateEnd)}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: education.description
                  }}
                  component="div"
                  variant="body2"
                  color="textSecondary"
                />
              </TimelineContent>
            </TimelineItem>
          ))}
          <ButtonEdit
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
                    Thêm học vấn
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            }
            fullWidth
            maxWidth="sm"
            title="Học vấn"
            onSubmit={handleSubmit(onSubmitCreate)}
          >
            <EducationEditForm watch={watch} control={control} />
          </ButtonEdit>
        </Timeline>
      </CardContent>
    </Card>
  );
};

const EducationEditForm = ({ control, watch }) => {
  const isCurrent = watch('isCurrent');
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <InputField
        label="Tiêu đề"
        name="title"
        control={control}
        placholder="Đại học Công nghệ TP.Hồ Chí Minh - HUTECH"
      />
      <CheckboxField label="Đến nay" name="isCurrent" />
      <DatePickerField
        label="Ngày bắt đầu"
        name="dateStart"
        control={control}
        placeholder="01/01/2020"
      />

      {!isCurrent && (
        <DatePickerField
          label="Ngày kết thúc"
          name="dateEnd"
          control={control}
          placeholder="01/01/2020"
        />
      )}

      <CKEditorField
        label="Mô tả"
        name="description"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
    </FieldLayout>
  );
};

export default Education;
