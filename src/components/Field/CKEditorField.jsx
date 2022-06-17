import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { FormHelperText, FormLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

function CKEditorField({ rules, control, name, ...rest }) {
  return (
    <Controller
      render={({ field }) => (
        <div
          style={{
            listStyleType: 'inherit'
          }}
        >
          <FormLabel sx={{ mb: 2 }}>{rest.label}</FormLabel>
          <CKEditor
            {...field}
            {...rest}
            editor={ClassicEditor}
            config={{
              toolbar: [
                'bold',
                'italic',
                'link',
                'undo',
                'redo',
                '|',
                'indent',
                'outdent',
                '|',
                'bulletedList',
                'numberedList',
                'blockQuote',
                '|'
              ]
            }}
            data={field.value ?? ''}
            onChange={(e, editor) => field.onChange(editor.getData())}
            error={control?.getFieldState(name)?.isTouched && control?.getFieldState(name)?.error}
            helperText={control?.getFieldState(name)?.error?.message}
          />
          <FormHelperText>{control?.getFieldState(name)?.error?.message}</FormHelperText>
        </div>
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
}

export default CKEditorField;
