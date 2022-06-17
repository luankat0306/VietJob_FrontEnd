import * as React from 'react';
import { styled } from '@mui/material/styles';

import {
    Paper,
    Container,
    Box,
    Typography,
    Grid as MuiGrid,
    Stack,
    Chip,
    IconButton,
    Tooltip,
    Link,
    Pagination,


} from '@mui/material';

import {Place,AccessTime,Visibility,Done,Close,Delete} from '@mui/icons-material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius:10,
  });

function KiemDuyetHoSoPage(){
    return(
        <Paper sx={{bgcolor:'whitesmoke',py:5}}>
            <Container>
                <Box data-aos="fade-right" sx={{bgcolor:'white',p:5}}>
                    <Typography variant='h6'sx={{pb:2}}>
                            Kiểm Duyệt Hồ Sơ
                    </Typography>
                    <MuiGrid data-aos="fade-right" container columns={16} spacing={5}> 
                        <MuiGrid item xs={8}>
                            <Paper sx={{
                                borderRadius:5,
                                p: 2,
                                margin: 'auto',
                                maxWidth: 600,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                transition: 'ease-in-out 0.3s',
                                ':hover': {                              
                                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                                    transform: `scale(1.05)`,
                                    }
                                }}>
                                <MuiGrid container spacing={2}>
                                    <MuiGrid item>
                                        <Box sx={{ width: 128, height: 128}}>
                                            <Img src="/src/assets/applicants/applicants-1.jpg"/>
                                        </Box>
                                    </MuiGrid>
                                    <MuiGrid item xs={12} sm >
                                        <Stack spacing={2}>
                                            <Typography variant="h6" >
                                                <Link href="#" underline="none" color="inherit">
                                                    David Johan
                                                </Link>
                                            </Typography>
                                            <Typography color='primary' variant="subtitle1" >
                                                Programmer
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Chip color='primary' size='small' icon={<Place/>} label="USA"/>
                                                <Chip color='primary' size='small' icon={<AccessTime/>} label="Part Time"/>
                                            </Stack>
                                        </Stack>
                                    </MuiGrid>
                                    <MuiGrid item >
                                    <Tooltip title="Xem Hồ Sơ">
                                        <IconButton color="secondary">
                                            <Visibility />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Duyệt">
                                        <IconButton color="success">
                                            <Done />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Từ Chối">
                                        <IconButton color="error">
                                            <Close />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Xóa">
                                        <IconButton color="dark">
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    </MuiGrid>
                                </MuiGrid>
                            </Paper>
                        </MuiGrid>

                        <MuiGrid item xs={8}>
                            <Paper sx={{
                                borderRadius:5,
                                p: 2,
                                margin: 'auto',
                                maxWidth: 600,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                transition: 'ease-in-out 0.3s',
                                ':hover': {                              
                                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                                    transform: `scale(1.05)`,
                                    }
                                }}>
                                <MuiGrid container spacing={2}>
                                    <MuiGrid item>
                                        <Box sx={{ width: 128, height: 128}}>
                                            <Img src="/src/assets/applicants/applicants-1.jpg"/>
                                        </Box>
                                    </MuiGrid>
                                    <MuiGrid item xs={12} sm >
                                        <Stack spacing={2}>
                                            <Typography variant="h6" >
                                                <Link href="#" underline="none" color="inherit">
                                                    David Johan
                                                </Link>
                                            </Typography>
                                            <Typography color='primary' variant="subtitle1" >
                                                Programmer
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Chip color='primary' size='small' icon={<Place/>} label="USA"/>
                                                <Chip color='primary' size='small' icon={<AccessTime/>} label="Part Time"/>
                                            </Stack>
                                        </Stack>
                                    </MuiGrid>
                                    <MuiGrid item >
                                    <Tooltip title="Xem Hồ Sơ">
                                        <IconButton color="secondary">
                                            <Visibility />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Duyệt">
                                        <IconButton color="success">
                                            <Done />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Từ Chối">
                                        <IconButton color="error">
                                            <Close />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Xóa">
                                        <IconButton color="dark">
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    </MuiGrid>
                                </MuiGrid>
                            </Paper>
                        </MuiGrid>

                        <MuiGrid item xs={8}>
                            <Paper sx={{
                                borderRadius:5,
                                p: 2,
                                margin: 'auto',
                                maxWidth: 600,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                transition: 'ease-in-out 0.3s',
                                ':hover': {                              
                                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                                    transform: `scale(1.05)`,
                                    }
                                }}>
                                <MuiGrid container spacing={2}>
                                    <MuiGrid item>
                                        <Box sx={{ width: 128, height: 128}}>
                                            <Img src="/src/assets/applicants/applicants-1.jpg"/>
                                        </Box>
                                    </MuiGrid>
                                    <MuiGrid item xs={12} sm >
                                        <Stack spacing={2}>
                                            <Typography variant="h6" >
                                                <Link href="#" underline="none" color="inherit">
                                                    David Johan
                                                </Link>
                                            </Typography>
                                            <Typography color='primary' variant="subtitle1" >
                                                Programmer
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Chip color='primary' size='small' icon={<Place/>} label="USA"/>
                                                <Chip color='primary' size='small' icon={<AccessTime/>} label="Part Time"/>
                                            </Stack>
                                        </Stack>
                                    </MuiGrid>
                                    <MuiGrid item >
                                    <Tooltip title="Xem Hồ Sơ">
                                        <IconButton color="secondary">
                                            <Visibility />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Duyệt">
                                        <IconButton color="success">
                                            <Done />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Từ Chối">
                                        <IconButton color="error">
                                            <Close />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Xóa">
                                        <IconButton color="dark">
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    </MuiGrid>
                                </MuiGrid>
                            </Paper>
                        </MuiGrid>

                        <MuiGrid item xs={8}>
                            <Paper sx={{
                                borderRadius:5,
                                p: 2,
                                margin: 'auto',
                                maxWidth: 600,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                transition: 'ease-in-out 0.3s',
                                ':hover': {                              
                                    boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                                    transform: `scale(1.05)`,
                                    }
                                }}>
                                <MuiGrid container spacing={2}>
                                    <MuiGrid item>
                                        <Box sx={{ width: 128, height: 128}}>
                                            <Img src="/src/assets/applicants/applicants-1.jpg"/>
                                        </Box>
                                    </MuiGrid>
                                    <MuiGrid item xs={12} sm >
                                        <Stack spacing={2}>
                                            <Typography variant="h6" >
                                                <Link href="#" underline="none" color="inherit">
                                                    David Johan
                                                </Link>
                                            </Typography>
                                            <Typography color='primary' variant="subtitle1" >
                                                Programmer
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                <Chip color='primary' size='small' icon={<Place/>} label="USA"/>
                                                <Chip color='primary' size='small' icon={<AccessTime/>} label="Part Time"/>
                                            </Stack>
                                        </Stack>
                                    </MuiGrid>
                                    <MuiGrid item >
                                    <Tooltip title="Xem Hồ Sơ">
                                        <IconButton color="secondary">
                                            <Visibility />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Duyệt">
                                        <IconButton color="success">
                                            <Done />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Từ Chối">
                                        <IconButton color="error">
                                            <Close />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Xóa">
                                        <IconButton color="dark">
                                            <Delete />
                                        </IconButton>
                                    </Tooltip>
                                    </MuiGrid>
                                </MuiGrid>
                            </Paper>
                        </MuiGrid>
                    </MuiGrid>
                    <Box fullWidth sx={{
                        mt:5,              
                        alignItems:'center',
                        display:'flex',
                        justifyContent:'center'
                        }}>
                        <Pagination count={5} shape="rounded"/>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
}
export default KiemDuyetHoSoPage;