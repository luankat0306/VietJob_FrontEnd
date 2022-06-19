import { Autocomplete, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function AutocompleteField({
  multiple = false,
  rules,
  control,
  name,
  label,
  options = [],
  ...rest
}) {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          size="small"
          value={field.value ?? (multiple ? [] : '')}
          getOptionLabel={(option) => option.label ?? option}
          options={options}
          onChange={(_, data) => field.onChange(data)}
          error={control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error}
          helperText={control?.getFieldState(name)?.error?.message}
          fullWidth
          autoHighlight
          multiple={multiple}
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
