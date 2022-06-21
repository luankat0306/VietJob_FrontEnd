import * as React from 'react';
import { Stack, Grid as MuiGrid, Typography, Button, Chip, Link } from '@mui/material';
import { Bookmark } from '@mui/icons-material';
import Box from '@mui/material/Box';
import avatar from '../../assets/employer-pngs/cmc-avatar.jpg';
import { primary } from '../../theme/themeColors';
import { formatDate } from '@/utils/format';

function JobListingBox({ item }) {
  return (
    <Box
      sx={{
        p: 2,
        m:1,
        border: `3px solid #f4f4f4`,
        borderRadius: 2,
        transition: 'ease-in-out 0.3s',
        ':hover': {
          border: `3px solid ${primary[200]}`,
          transform: `scale(1.025)`,
          boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
          cursor: 'pointer'
        }
      }}
    >
      <MuiGrid container direction="row" xs={12}>
        <MuiGrid item xs={2}>
          <img
            src={item?.employer?.user?.avatar}
            style={{
              objectFit: 'contain',
              width: 160,
              height: 130,
              
            }}
          />
        </MuiGrid>

        <MuiGrid container item xs={10} direction="column">
          <MuiGrid container item direction="row" spacing={2}>
            <MuiGrid item xs={8}>
              <Link href="#" underline="hover">
                <Typography variant="h6">{item?.title}</Typography>
              </Link>
              <Link href="#" underline="hover">
                <Typography variant="subtitle1">{item?.employer?.user?.name}</Typography>
              </Link>
            </MuiGrid>
            <MuiGrid item xs={4}>            
                <Typography variant="subtitle1">
                  Hạn cuối: <strong>{item?.deadline ? formatDate(item?.deadline) : ''}</strong> 
                </Typography>    
            </MuiGrid>
          </MuiGrid>
          <MuiGrid container item  direction="row">
            <MuiGrid item xs>
              <Stack direction="row" spacing={1}>
                <Chip sx={{ borderRadius: 1 }} label={item?.wage} />
                <Chip sx={{ borderRadius: 1 }} label={item?.experience} />
                <Chip sx={{ borderRadius: 1 }} label={item?.formality} />
              </Stack>
            </MuiGrid>
            {/* <MuiGrid item xs={3}>
              <Button size="small" color="secondary" variant="contained" endIcon={<Bookmark />}>
                Lưu Tin
              </Button>
            </MuiGrid> */}
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
    </Box>
  );
}
export default JobListingBox;
