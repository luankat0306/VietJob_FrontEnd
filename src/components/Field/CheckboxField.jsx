import { Checkbox } from '@mui/material';
import { Controller } from 'react-hook-form';

function CheckboxField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <Checkbox
          onChange={(e) => field.onChange(e.target.checked)}
          checked={field.value}
          siza="small"
          label={rest.label}
        />
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default CheckboxField;
