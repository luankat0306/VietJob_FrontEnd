import { Grid } from '@mui/material';
import React from 'react';

const FieldLayout = ({ children, xs = 12, md = 6, lg = 4, xl = 3, className, ...rest }) => {
  return (
    <Grid className={className} container spacing={2}>
      {React.Children.map(children, (child) => {
        return child ? (
          <Grid item xs={xs} md={md} lg={lg} xl={xl} {...rest}>
            {child}
          </Grid>
        ) : null;
      })}
    </Grid>
  );
};

export default FieldLayout;
