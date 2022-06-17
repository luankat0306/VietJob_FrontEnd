import CKEditorField from '@/components/Field/CKEditorField';
import { primary } from '@/theme/themeColors';
import { Card, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ButtonEdit from './ButtonEdit';

const Description = ({ data, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      moreInfo: data?.moreInfo ?? ''
    }
  });

  useEffect(() => {
    reset(data);
  }, [data]);
  return (
    <Card>
      <CardContent>
        <Typography component="div" variant="h6" fontWeight={700}>
          Giới thiệu bản thân
          <ButtonEdit title="Giới thiệu bản thân" onSubmit={handleSubmit(onSubmit)}>
            <DescriptionEditForm control={control} />
          </ButtonEdit>
        </Typography>
        <div />
        <Typography
          dangerouslySetInnerHTML={{ __html: data?.moreInfo }}
          mt={1}
          component="div"
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
    </Card>
  );
};

const DescriptionEditForm = ({ control }) => {
  return (
    <CKEditorField
      name="moreInfo"
      control={control}
      style={{ width: '100%', minHeight: '300px' }}
    />
  );
};

export default Description;
