import { AccessTime, BusinessCenterRounded, Place } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { primary } from '../../theme/themeColors';

const CardJob = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate('/viec-lam/viec-lam-01')}
      sx={{
        border: `1px solid transparent`,
        transition: 'ease-in-out 0.3s',
        ':hover': {
          border: `1px solid ${primary[900]}`,
          cursor: 'pointer'
        }
      }}
    >
      <CardContent>
        <Stack>
          <ListItem disablePadding>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: primary[500] }}>
                <BusinessCenterRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  data-content={item.name}
                  sx={{
                    display: 'inline-block',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'primary.main',
                    '::before': {
                      content: 'attr(data-content)',
                      color: 'primary.900',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '0',
                      transition: 'width 300ms ease-in-out',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden'
                    },
                    ':hover': {
                      '::before': {
                        width: '100%'
                      }
                    }
                  }}
                  fontWeight={600}
                  variant="h6"
                >
                  {item.name}
                </Typography>
              }
              secondary={item.enterpriseName}
            />
          </ListItem>

          <Stack
            sx={{
              mt: 1
            }}
            direction="row"
            spacing={1}
          >
            <Box
              sx={{
                backgroundColor: '#FFF4F3',
                color: '#F81815',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px'
              }}
              icon={false}
            >
              <Typography variant="body1">Urgent</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#E8FFF0',
                color: '#00B441',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px'
              }}
              icon={false}
            >
              <Typography variant="body1">Fulltime</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#EBF9FF',
                color: '#00A6E5',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px'
              }}
              icon={false}
            >
              <Typography variant="body1">Remote</Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#fff8e1',
                color: '#ffa000',
                fontWeight: 600,
                padding: '5px 10px',
                borderRadius: '5px'
              }}
              icon={false}
            >
              <Typography variant="body1">Part Time</Typography>
            </Box>
          </Stack>

          <Stack
            sx={{
              mt: 1
            }}
            direction="row"
            spacing={1}
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTime color="primary" fontSize="16px" sx={{ mr: 1 }} />
              <Typography variant="subtitle1">Còn 3 ngày</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Place color="primary" fontSize="16px" sx={{ mr: 1 }} />
              <Typography variant="subtitle1">Hồ Chí Minh</Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardJob;
