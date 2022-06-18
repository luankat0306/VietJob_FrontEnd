import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function AutocompleteField({ rules, control, name, label, options = [], ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          value={field.value ?? ''}
          getOptionLabel={(option) => option.label ?? option}
          options={options}
          onChange={(_, data) => field.onChange(data)}
          error={control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error}
          helperText={control?.getFieldState(name)?.error?.message}
          fullWidth
          autoHighlight
          renderInput={(params) => (
            <TextField
              {...params}
              {...rest}
              label={label}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'disabled' // disable autocomplete and autofill
              }}
              size="small"
            />
          )}
        />
      )}
      onChange={([, data]) => data}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default AutocompleteField;
