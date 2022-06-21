import { FormLabel } from '@mui/material';
import { Controller } from 'react-hook-form';
import UploadFile from '../Base/UploadFile';

function UploadField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <>
          <FormLabel>{rest?.label}</FormLabel>
          <UploadFile name={name} files={field.value} onChange={field.onChange} {...rest} />
        </>
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default UploadField;
