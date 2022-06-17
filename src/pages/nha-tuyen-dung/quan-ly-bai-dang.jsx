import * as React from 'react';
import {
    Paper,
    Container,
    Box,
    Table,TableBody ,TableCell ,TableHead ,TableRow,TablePagination,
    Typography,
    Stack,
    IconButton,
    Tooltip,
    Chip,
    Link
} from '@mui/material'
import { Edit,Delete,Place} from '@mui/icons-material';

function createData(title,place,applications, date, status, action) {
    return { title,place,applications, date, status, action};
  }

const rows = [
    createData('Product Designer','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),
    createData('Android Developer','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),
    createData('Senior Manager','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),
    createData('Digital Marketer','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),
    createData('Web Developer','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),
    createData('UI/UX Designer','32, Wales Street, New York, USA','5+ Applied', 'November 27, 2020, to December 25, 2021', 'Active',''),

];



function QuanLyBaiDangPage(){

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };

    return(
        <Paper sx={{bgcolor:'whitesmoke',py:5}}>
            <Container>
                <Box data-aos="fade-right" sx={{bgcolor:'white',p:5}}>
                    <Typography variant='h6'sx={{pb:2}}>
                        Quản Lý Bài Đăng
                    </Typography>
                    <Table data-aos="fade-right" sx={{borderCollapse:'separate'}}>
                        <TableHead>
                            <TableRow> 
                                <TableCell sx={{borderBottom:`2px solid black`}}>
                                    <Typography  variant='h6'>
                                        Tiêu Đề
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid black`}}>
                                    <Typography variant='h6'>
                                        Số Lượng Ứng Viên
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid black`}}>
                                    <Typography  variant='h6'>
                                        Thời Hạn
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid black`}}>
                                    <Typography  variant='h6'>
                                        Trạng Thái
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid black`}}>
                                    <Typography variant='h6'>
                                        Thao Tác
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                        {rows.map((row) => (
                            <TableRow data-aos="fade-right"
                            key={row.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },
                            transition: 'ease-in-out 0.3s',
                            ':hover': {                              
                                boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                                
                                }
                            }}
                            >
                                <Stack>
                                    <TableCell component="th" scope="row">
                                        <Typography variant='h6'>
                                            {row.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{borderBottom:`2px solid #e7e7e7`}} component="th" scope="row">
                                        <Chip color="primary" size="small" icon={<Place/>} label={row.place} />
                                    </TableCell>
                                </Stack>
                                <TableCell sx={{borderBottom:`2px solid #e7e7e7`}}>
                                    <Link href="#" underline="none">{row.applications}</Link>
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid #e7e7e7`,color:'#646464'}}>{row.date}</TableCell>
                                <TableCell 
                                sx={{borderBottom:`2px solid #e7e7e7`}}>
                                    <Chip size="small" label={row.status} color="success" />
                                </TableCell>
                                <TableCell sx={{borderBottom:`2px solid #e7e7e7`}}>
                                    <Stack direction={row}>
                                        <Tooltip title="Chỉnh Sửa">
                                            <IconButton color='primary'>
                                                <Edit/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Xoá">
                                            <IconButton color='primary'>
                                                <Delete/>
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>  
                    </Table>
                    <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Container>
        </Paper>
    );
}
export default QuanLyBaiDangPage;