import { Box } from '@mui/material';
import React from 'react';

const LabelWithIcon = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {children}
    </Box>
  );
};

export default LabelWithIcon;
