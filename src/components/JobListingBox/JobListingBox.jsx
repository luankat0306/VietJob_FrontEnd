import * as React from 'react';
import {
    Stack,
    Grid as MuiGrid,
    Typography,
    Button,
    Chip,
    Link
    } from '@mui/material'
import {Bookmark} from '@mui/icons-material';
import  Box from '@mui/material/Box';
import avatar from '../../assets/employer-pngs/cmc-avatar.jpg'
import { primary } from '../../theme/themeColors';

function JobListingBox(){
    return (
        <Box sx={{
        p:2, 
        border: `3px solid #f4f4f4`,
        borderRadius:2,
        transition: 'ease-in-out 0.3s',
        ':hover': {
        border: `3px solid ${primary[200]}`,
        transform: `scale(1.05)`,
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
        cursor: 'pointer'},
        }}>
            <MuiGrid container direction='row' xs={12} >
                <MuiGrid item xs={2} >
                    <img src={avatar} style={{
                        objectFit:'cover',
                        width:120,
                        height:100,
                    }}/>
                </MuiGrid>

                <MuiGrid container item xs={10} direction='column' sx={{pl:2}}>
                    <MuiGrid container item xs={8} direction='row'>
                        <MuiGrid item xs={8}>
                            <Link href="#" underline="hover">
                                <Typography variant='h6'>
                                    Android Developer - T5063
                                </Typography>
                            </Link>
                            <Link href="#" underline="hover">
                                <Typography variant='subtitle1'>
                                    CÔNG TY TNHH CMC GLOBAL
                                </Typography>
                            </Link>
                        </MuiGrid>
                        <MuiGrid item xs={4}>
                            <Stack direction='row' spacing={0.5}>
                                <Typography variant='p'>Còn</Typography>
                                <Typography variant='p'><b>30</b></Typography>
                                <Typography variant='p'>Ngày Để Ứng Tuyển</Typography>
                            </Stack>
                        </MuiGrid>
                    </MuiGrid>
                    <MuiGrid container item xs={4} direction='row'>
                    <MuiGrid item xs={9} >
                        <Stack direction='row' spacing={1}>
                                <Chip sx={{borderRadius:1}} label="25-45 triệu"/>
                                <Chip sx={{borderRadius:1}} label="Cầu Giấy, Hà Nội" />
                                <Chip sx={{borderRadius:1}} label="3 ngày trước" />
                        </Stack>
                    </MuiGrid>
                    <MuiGrid item xs={3}>
                    <Button size='small' color='secondary' variant="contained" endIcon={<Bookmark/>}>
                            Lưu Tin
                        </Button>
                    </MuiGrid>
                    </MuiGrid>
                </MuiGrid>
            </MuiGrid>
        </Box>
    );
}
export default JobListingBox;