import { TextareaAutosize } from '@mui/material';
import { Controller } from 'react-hook-form';

function TextareaField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <TextareaAutosize
          {...field}
          {...rest}
          value={field.value ?? ''}
          onChange={(e) => field.onChange(e.target.value)}
          error={control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error}
          helperText={control?.getFieldState(name)?.error?.message}
        />
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default TextareaField;
