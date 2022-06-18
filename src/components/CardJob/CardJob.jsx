import { AccessTime, BusinessCenterRounded, Timelapse } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
// import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { primary } from '../../theme/themeColors';
import moment from 'moment/min/moment-with-locales';
import { status, statusColor } from '@/utils/status';

const CardJob = ({ item }) => {
  const fromNow = 'Hạn nộp: ' + moment(item.deadline).format('DD/MM/YYYY');

  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate('/viec-lam/' + item.id)}
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
              <Avatar
                sx={{ bgcolor: 'white', p: 0.5, width: 56, height: 56 }}
                src={item.avatar}
                variant="rounded"
              >
                <BusinessCenterRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Tooltip title={item.name}>
                  <Typography
                    data-content={item.name}
                    // sx={{
                    //   display: 'inline-block',
                    //   position: 'relative',
                    //   overflow: 'hidden',
                    //   color: 'primary.main',
                    //   '::before': {
                    //     content: 'attr(data-content)',
                    //     color: 'primary.900',
                    //     position: 'absolute',
                    //     top: '0',
                    //     left: '0',
                    //     width: '0',
                    //     transition: 'width 300ms ease-in-out',
                    //     whiteSpace: 'nowrap',
                    //     overflow: 'hidden'
                    //   },
                    //   ':hover': {
                    //     '::before': {
                    //       width: '100%'
                    //     }
                    //   }
                    // }}
                    fontWeight={600}
                    variant="h6"
                    className="job-title"
                  >
                    {item.name}
                  </Typography>
                </Tooltip>
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
            {/* <Box
              sx={{
                backgroundColor: '#FFF4F3',
                color: '#F81815',
                fontWeight: 700,
                padding: '5px 10px',
                borderRadius: '5px'
              }}
              icon={false}
            >
              <Typography textAlign="center" variant="body1">
                Urgent
              </Typography>
            </Box> */}
            {item.formality && (
              <Box
                sx={{
                  backgroundColor: '#E8FFF0',
                  color: '#00B441',
                  padding: '5px 10px',
                  borderRadius: '5px'
                }}
                icon={false}
              >
                <Typography fontWeight={700} textAlign="center" variant="body1">
                  {item.formality}
                </Typography>
              </Box>
            )}
            {item.experience && (
              <Box
                sx={{
                  backgroundColor: '#EBF9FF',
                  color: '#00A6E5',
                  padding: '5px 10px',
                  borderRadius: '5px'
                }}
                icon={false}
              >
                <Typography fontWeight={700} textAlign="center" variant="body1">
                  {item.experience}
                </Typography>
              </Box>
            )}
            {item.wage && (
              <Box
                sx={{
                  backgroundColor: '#fff8e1',
                  color: '#ffa000',
                  padding: '5px 10px',
                  borderRadius: '5px'
                }}
                icon={false}
              >
                <Typography fontWeight={700} textAlign="center" variant="body1">
                  {item.wage}
                </Typography>
              </Box>
            )}
          </Stack>

          <Stack
            sx={{
              mt: 1
            }}
            direction="row"
            spacing={1}
            justifyContent="flex-end"
          >
            {item?.status >= 0 ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Typography color={statusColor(item.status)}>{status(item?.status)}</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <AccessTime color="primary" fontSize="16px" sx={{ mr: 1 }} />
                <Typography variant="subtitle1">{fromNow}</Typography>
              </Box>
            )}
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Place color="primary" fontSize="16px" sx={{ mr: 1 }} />
              <Typography variant="subtitle1">Hồ Chí Minh</Typography>
            </Box> */}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardJob;
