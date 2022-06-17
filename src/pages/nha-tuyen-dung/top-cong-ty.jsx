import * as React from 'react';
import  Box from '@mui/material/Box';
import { primary } from '../../theme/themeColors';
import coverTopCongTy from '../../assets/employer-pngs/telecom.jpg'
import { grey } from '@mui/material/colors';
import {
Paper,
Container,
Typography,
Grid as MuiGrid,
Card,CardActionArea,CardMedia,CardContent,
Pagination
} from '@mui/material';
import EmployerSearchBar from '@/components/EmployerSearchBar/EmployerSearchBar';
    
function TopCongTyPage(){
  return(
    <Paper>
      <EmployerSearchBar/>

      <Box data-aos="fade-right" sx={{ width: '100%',}}>
        <Container>
          <Typography data-aos="fade-right" sx={{ 
            textAlign: 'center',
            mb: 5,
            color:grey[800] }} variant="h4" fontWeight={500}>
            Danh Sách Top Các Công Ty
          </Typography>
          <MuiGrid data-aos="fade-right" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <MuiGrid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{
                  maxWidth: 400,
                  border: `4px solid transparent`,
                  transition: 'ease-in-out 0.3s',
                  ':hover': {
                  border: `4px solid ${primary[200]}`,
                  transform: `scale(1.05)`,
                  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                  cursor: 'pointer'
                  }
                  }}>
                  <CardActionArea>
                    <Box sx={{position:'relative',mb:5}}>
                      <CardMedia component="img" height="200" image={coverTopCongTy} sx={{
                        objectFit: "cover",
                        }}
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" color={primary['main']}>
                        TOP CÔNG TY VIỄN THÔNG
                      </Typography>
                      <Typography variant="body2" component="div" color="text.secondary">
                        Tất cả những việc làm hot nhất tại các Công ty viễn thông hàng đầu Việt Nam. Nơi bạn sẽ được trải nghiệm, 
                        thử thách bản thân. Các Công ty viễn thông lọt vào danh sách này dựa trên những tiêu chí Chất lượng sản phẩm - 
                        Môi trường làm việc - Chế độ đãi ngộ - Khả năng học hỏi...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </MuiGrid>
            ))}
          </MuiGrid>
          <Box fullWidth sx={{
            mt:3,              
            mb:3,
            alignItems:'center',
            display:'flex',
            justifyContent:'center'
            }}>
            <Pagination count={5} shape="rounded"/>
          </Box>
        </Container>
      </Box>
    </Paper>     
  );
}
export default TopCongTyPage