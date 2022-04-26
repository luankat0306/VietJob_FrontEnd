
import * as React from 'react';
import {
Paper,
Container,
Stack,
Grid as MuiGrid,
Typography,
Link,
Button,
Pagination
} from '@mui/material'
import { Language,Groups,LocationOn} from '@mui/icons-material';

import  Box from '@mui/material/Box';
import cover from '../../assets/employer-pngs/cmc-cover.jpg'
import avatar from '../../assets/employer-pngs/cmc-avatar.jpg'
import { primary, secondary } from '../../theme/themeColors';
import JobListingBox from '@/components/JobListingBox/JobListingBox';


function ChiTietNhaTuyenDungPage(){
    return(
        <Paper sx={{bgcolor:'#e5e5e5'}}>
            <Container>
                <Box sx={{mb:3}}>
                    <MuiGrid container>
                        <MuiGrid item xs={12}>
                            <Box component='div' fullwidth sx={{
                            height:'auto',
                            bgcolor:'white',
                            borderRadius:2,
                            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`}}>
                                <Stack>
                                    <Box sx={{height:300,position:'relative'}}>
                                        <img src={cover} style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height:300
                                        }}/>
                                        <img src={avatar} style={{
                                            objectFit:'cover',
                                            position:'absolute',
                                            left:30,
                                            bottom:-70,
                                            border:`4px solid ${primary[100]}`,
                                            width:180,
                                            height:150,
                                        }}/>
                                    </Box>
                                    <Box sx={{height:'auto,',ml:30,mt:1,mb:3}}>
                                        <MuiGrid container>
                                            <MuiGrid item xs={6}>
                                                <Box >
                                                    <Stack spacing={0}>
                                                        <Typography variant='h5'>
                                                            Công ty TNHH CMC GLOBAL
                                                        </Typography>
                                                        <Box>
                                                            <MuiGrid container>
                                                                <MuiGrid item xs={6}>
                                                                    <Link href="#" underline="hover" color="inherit"
                                                                        sx={{ display: 'flex', alignItems: 'center'}}>
                                                                        <Language sx={{mr: 1, my:1 }}/>
                                                                        http://cmcglobal.com.vn/
                                                                    </Link>
                                                                </MuiGrid>
                                                                <MuiGrid item xs={6}>
                                                                    <Typography variant='p'
                                                                        sx={{ display: 'flex', alignItems: 'center'}}>
                                                                        <Groups sx={{mr: 1, my:1 }}/>
                                                                        500-1000 nhân viên
                                                                    </Typography>
                                                                </MuiGrid>
                                                            </MuiGrid>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </MuiGrid>
                                            <MuiGrid item xs={6}>
                                            <Box sx={{
                                                display:'flex',
                                                alignItems:'center',
                                                justifyContent:'center',
                                                mt:2,
                                                ml:20}}>
                                                    <Button 
                                                    size="large" 
                                                    color="secondary" 
                                                    variant="contained">theo dõi công ty
                                                    </Button>
                                            </Box>
                                            </MuiGrid>
                                        </MuiGrid>
                                    </Box>
                                </Stack>
                            </Box>
                        </MuiGrid>
                    </MuiGrid>
                </Box>

                <Box>
                    <MuiGrid container direction="row" justifyContent="center" >
                        <MuiGrid item xs={8}>
                            <Box component='div' fullwidth sx={{
                            height:'auto',
                            bgcolor:'white',
                            p:2,
                            mb:3,
                            borderRadius:2,
                            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`}}>
                                <Box sx={{pl:1,borderLeft:`5px solid ${secondary['main']}`}}>
                                    <Typography variant='h5'>
                                        Giới thiệu công ty
                                    </Typography>
                                </Box>
                                <Box sx={{pt:2,}}>
                                    <Stack spacing={2}>
                                        <Typography variant="p" gutterBottom component="div">
                                        CMC Global ra đời từ kinh nghiệm 25 năm trong lĩnh vực ICT và hơn 10 năm kinh nghiệm trong lĩnh vực Outsourcing của Tập đoàn công nghệ CMC, với sứ mệnh trở thành đơn vị cung cấp nhân lực kỹ sư phần mềm chất lượng cao, cung cấp các giải pháp, dịch vụ CNTT cho thị trường quốc tế. Hiện CMC Global đang sở hữu đến 700++ nhân viên, cùng một công ty thành viên tại Nhật Bản.
                                        </Typography>

                                        <Typography variant="p" gutterBottom component="div">
                                        Tập đoàn công nghệ CMC cùng CMC Global tự hào là một trong những doanh nghiệp hàng đầu Việt Nam trong lĩnh vực phát triển, cung cấp các giải pháp và dịch vụ phần mềm. Chia sẻ chung những tiêu chí tiên quyết cho sự phát triển của Tập đoàn CMC: Sáng tạo, Chuyên nghiệp, Đồng đội, CMC Global luôn nỗ lực không ngừng để xây dựng một tập thể vững mạnh, tiên phong trong nền công nghệ Việt Nam và ngày một vươn xa ra thế giới.
                                        </Typography>

                                        <Typography variant="p" gutterBottom component="div">
                                        Với mục tiêu đưa các sản phẩm và dịch vụ công nghệ cao của CMC ra thế giới, CMC Global đang xây dựng những nền móng đầu tiên với tham vọng: có ít nhất 2.000 người làm việc ở nước ngoài vào năm 2022; doanh thu phần mềm và dịch vụ từ thị trường xuất khẩu lớn hơn thị trường trong nước; có nhiều sản phẩm và dịch vụ đạt tiêu chuẩn hàng đầu thế giới. Trong tương lai, ngoài công ty thành viên CMC Japan tại Nhật Bản, CMC Global sẽ mở thêm các chi nhánh tại các nước châu Á như Singapore, Malaysia,….
                                        </Typography>

                                        <Typography variant="p" gutterBottom component="div">
                                        Chiến lược đầu tư của CMC Global được định vị có phần khác biệt so với các công ty outsourcing cũng ngành ở thị trường Việt Nam. CMC Global sẽ chú trọng vào việc phát triển nguồn lực, chuẩn hóa qui trình cung cấp dịch vụ và phát triển phần mềm, đào tạo nhân sự chất lượng cao, cùng lúc thu hút số lượng lớn các nhân tài trong lĩnh vực công nghệ thông tin. Đồng thời, CMC Global cũng sẽ là đại diện, cầu nối cho các công ty thành viên của CMC trong việc cung cấp các giải pháp và dịch vụ tích hợp trọn gói ra thế giới.
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>

                            <Box component='div' fullwidth sx={{
                            height:'auto',
                            bgcolor:'white',
                            p:2,
                            borderRadius:2,
                            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`}}>
                                <Box sx={{pl:1,borderLeft:`5px solid ${secondary['main']}`,mb:2}}>
                                    <Typography variant='h5'>
                                        Tuyển Dụng
                                    </Typography>
                                </Box>
                                <Stack spacing={2}>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                    <JobListingBox/>
                                </Stack>
                                <Box fullWidth sx={{
                                    mt:3,              
                                    mb:3,                        
                                    alignItems:'center',
                                    display:'flex',
                                    justifyContent:'center'
                                    }}>
                                    <Pagination count={5} shape="rounded"/>
                                </Box>
                            </Box>
                        </MuiGrid> 

                        <MuiGrid item xs={4}>
                            <Box component='div' fullwidth sx={{
                            height:'auto',
                            bgcolor:'white',
                            p:2,
                            ml:3,
                            mb:3,
                            borderRadius:2,
                            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`}}>
                                <Box sx={{pl:1,borderLeft:`5px solid ${secondary['main']}`}}>
                                    <Typography variant='h5'>
                                        Địa Chỉ
                                    </Typography>
                                </Box>
                                <Box sx={{pt:2}}>
                                    <Typography variant='subtitle' sx={{ display: 'flex', alignItems: 'center'}}>
                                    <LocationOn color='secondary' sx={{mr: 1, my:1 }}/>
                                        Tầng 8-9, Tòa CMC, Duy Tân, Cầu Giấy, Hà Nội
                                    </Typography>
                                </Box>
                            </Box>

                            <Box component='div' fullwidth sx={{
                            height:'auto',
                            bgcolor:'white',
                            p:2,                           
                            ml:3,
                            boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                            borderRadius:2,
                            }}>
                                <Box sx={{pl:1,borderLeft:`5px solid ${secondary['main']}`}}>
                                    <Typography variant='h5'>
                                        Chia Sẻ Công Ty Tới Bạn Bè
                                    </Typography>
                                </Box>
                                <Box sx={{pt:2}}>

                                </Box>
                            </Box>
                        </MuiGrid>
                    </MuiGrid>
                </Box>


            </Container>    
        </Paper>
    );
        
}
export default ChiTietNhaTuyenDungPage;