import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

function CheckboxField({ rules, control, name, label, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <FormControlLabel
          label={label}
          control={
            <Checkbox
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              siza="small"
              {...rest}
            />
          }
        />
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default CheckboxField;
