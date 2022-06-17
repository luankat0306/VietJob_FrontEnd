import CKEditorField from '@/components/Field/CKEditorField';
import DatePickerField from '@/components/Field/DatePickerField';
import InputField from '@/components/Field/InputField';
import FieldLayout from '@/components/FieldLayout';
import {
  useExperiences,
  useMutationCreateExperience,
  useMutationUpdateExperience
} from '@/hooks/experience';
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

const Experience = ({ data }) => {
  const { data: experiences = [] } = useExperiences({ candidateId: data?._id });
  const { mutateAsync: mutateCreate } = useMutationCreateExperience();
  const { mutateAsync: mutateUpdate } = useMutationUpdateExperience();
  const { control, handleSubmit, reset } = useForm({
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
    const experience = experiences.find((item) => item._id === showEdit);
    if (experience) {
      reset(experience);
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
          Kinh nghiệm
        </Typography>
        <div />
        <Timeline position="right">
          {experiences.map((experience) => (
            <TimelineItem
              key={experience._id}
              sx={{
                '&.MuiTimelineItem-root': {
                  '::before': {
                    content: 'initial'
                  }
                }
              }}
              onMouseEnter={() => setShowEdit(experience._id)}
              onMouseLeave={() => setShowEdit('')}
            >
              <TimelineSeparator>
                <TimelineDot sx={{ mt: 2 }} color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack direction="row" spacing={1}>
                  <Typography pt={0} component="div" variant="h6" color="textSecondary">
                    {experience.title}
                  </Typography>
                  {/* {showEdit === experience._id && ( */}
                  <ButtonEdit
                    fullWidth
                    maxWidth="sm"
                    title="Kinh nghiệm"
                    onClick={() => {
                      setShowEdit('');
                    }}
                    sx={{
                      display: showEdit === experience._id ? 'inline-flex' : 'none'
                    }}
                    onSubmit={handleSubmit(onSubmitUpdate)}
                  >
                    <ExperienceEditForm control={control} />
                  </ButtonEdit>
                  {/* )} */}
                </Stack>
                <Typography component="div" variant="body2" color="textSecondary">
                  {formatDate(experience.dateStart)} - {formatDate(experience.dateEnd)}
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: experience.description
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
                    Thêm kinh nghiệm
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            }
            fullWidth
            maxWidth="sm"
            title="Kinh nghiệm"
            onSubmit={handleSubmit(onSubmitCreate)}
          >
            <ExperienceEditForm control={control} />
          </ButtonEdit>
        </Timeline>
      </CardContent>
    </Card>
  );
};

const ExperienceEditForm = ({ control }) => {
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <InputField
        label="Tiêu đề"
        name="title"
        control={control}
        placholder="Đại học Công nghệ TP.Hồ Chí Minh - HUTECH"
      />

      <DatePickerField
        label="Ngày bắt đầu"
        name="dateStart"
        control={control}
        placeholder="01/01/2020"
      />

      <DatePickerField
        label="Ngày kết thúc"
        name="dateEnd"
        control={control}
        placeholder="01/01/2020"
      />

      <CKEditorField
        label="Mô tả"
        name="description"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
    </FieldLayout>
  );
};

export default Experience;
