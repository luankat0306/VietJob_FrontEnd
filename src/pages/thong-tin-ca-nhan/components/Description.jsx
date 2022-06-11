import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextareaField from '../../../components/Field/TextareaField';
import ButtonEdit from './ButtonEdit';

const Description = ({ data, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      description: data?.description ?? ''
    }
  });

  useEffect(() => {
    reset({
      description: data?.description
    });
  }, [data]);
  return (
    <>
      <Typography component="div" variant="h6" fontWeight={700}>
        Giới thiệu bản thân
        <ButtonEdit title="Giới thiệu bản thân" onSubmit={handleSubmit(onSubmit)}>
          <DescriptionEditForm control={control} />
        </ButtonEdit>
      </Typography>
      <Typography mt={1} component="div" variant="body2" color="textSecondary">
        {data?.description}
      </Typography>
    </>
  );
};

const DescriptionEditForm = ({ control }) => {
  return (
    <TextareaField
      name="description"
      control={control}
      style={{ width: '100%', minHeight: '300px' }}
    />
  );
};

export default Description;
