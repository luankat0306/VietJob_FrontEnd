import React from 'react';
import theme from './index';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const MuiTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiTheme;
