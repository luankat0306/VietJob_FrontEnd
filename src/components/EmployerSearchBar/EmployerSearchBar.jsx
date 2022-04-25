import * as React from 'react';
import  Box from '@mui/material/Box';
import { primary } from '../../theme/themeColors';
import { Search } from '@mui/icons-material';
import employer from '../../assets//employer-pngs/employer.png';
import { 
Container,
Typography,
Grid as MuiGrid,
Stack,
TextField,
Button,

} from '@mui/material';


function EmployerSearchBar(){
    return(
        <Box fullwidth sx={{
            background: `linear-gradient(${primary['main']}, ${primary[200]})`,
            height:'auto',
            mb:5
            }}>
            <Container>
              <MuiGrid container columnSpacing={0} sx={{ py:3}}>
                <MuiGrid item xs={5}>
                  <Stack spacing={4} data-speed="-2" >
                    <Typography data-aos="fade-right"  variant="h5" sx={{
                      fontWeight:300,
                      color:primary[50]
                    }}>
                      Khám phá các nhà tuyển dụng nổi bật
                    </Typography>
                
                    <Typography data-aos="fade-right" variant="p" sx={{
                      color:primary[50],
                      fontSize:16,
                      fontWeight:200
                    }}>
                      Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn
                    </Typography>
      
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>  
                      <TextField id="input" label="Nhập tên nhà tuyển dụng" variant="filled" size="normal" fullWidth  sx={{
                        background:primary[50],
                      }} />
                      <Button variant="contained"  size="small" sx={{
                        borderTopLeftRadius:0,
                        borderBottomLeftRadius:0,
                      }}>
                        <Search sx={{ 
                        color: primary['main'],
                        fontSize:28, 
                        mr: 1, 
                        my: 1 
                        }} />
                      </Button>
                    </Box>
                  </Stack>
                </MuiGrid>
                <MuiGrid item xs={7}>
                  <img
                    data-speed="-2"
                    style={{
                      objectFit: "cover",
                      width:'50%',
                      display: 'block',
                      marginLeft: 'auto',
                      
                    
                    }}
                    src={employer}
                  />
                </MuiGrid>
              </MuiGrid>
            </Container>
          </Box>
    );
}
export default EmployerSearchBar;