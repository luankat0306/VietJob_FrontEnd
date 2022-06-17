import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DatePickerField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            {...field}
            {...rest}
            onChange={(value) => {
              field.onChange(value);
            }}
            value={field.value ?? null}
            inputFormat="DD/MM/YYYY"
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={
                  control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error
                }
                helperText={control?.getFieldState(name)?.error?.message}
              />
            )}
          />
        </LocalizationProvider>
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default DatePickerField;
