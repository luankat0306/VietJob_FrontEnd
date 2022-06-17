import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <TextField
          {...field}
          {...rest}
          fullWidth
          error={control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error}
          helperText={control?.getFieldState(name)?.error?.message}
          siza="small"
        />
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default InputField;
