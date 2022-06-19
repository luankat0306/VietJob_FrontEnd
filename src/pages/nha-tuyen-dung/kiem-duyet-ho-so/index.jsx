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
  Avatar,
  Card
} from '@mui/material';

import { Place, AccessTime, Visibility, Done, Close, Delete } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useApplications,
  useApplicationsByPostId,
  useMutationUpdateApplication
} from '@/hooks/application';
import { error, primary, success } from '@/theme/themeColors';
import ButtonDialog from './components/ButtonDialog';

function KiemDuyetHoSoPage() {
  const { id } = useParams();
  const { data: applications } = useApplicationsByPostId({
    post: id
  });

  const { mutateAsync: mutateUpdate } = useMutationUpdateApplication();
  const handleUpdate = async (application) => {
    const { _id, __v, status } = application;
    await mutateUpdate({ _id, status });
  };
  const navigate = useNavigate();
  return (
    <Paper sx={{ bgcolor: 'whitesmoke', py: 5 }}>
      <Container>
        <Card data-aos="fade-right" sx={{ bgcolor: 'white', p: 5 }}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Kiểm Duyệt Hồ Sơ
          </Typography>
          <MuiGrid data-aos="fade-right" container columns={16} spacing={5}>
            {applications?.data?.map((application) => (
              <MuiGrid item xs={8} key={application._id}>
                <Card
                  sx={{
                    border: `1px solid ${primary[100]} !important`,
                    p: 2,
                    margin: 'auto',
                    maxWidth: 600,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    transition: 'ease-in-out 0.3s',
                    ':hover': {
                      boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`,
                      transform: `scale(1.05)`
                    }
                  }}
                >
                  <MuiGrid container spacing={2}>
                    <MuiGrid item>
                      <Box sx={{ width: 128, height: 128 }}>
                        <Avatar
                          variant="rounded"
                          src={application?.candidate?.user?.avatar}
                          sx={{
                            width: '100%',
                            height: '100%'
                          }}
                          alt={application?.candidate?.user?.name}
                        ></Avatar>
                      </Box>
                    </MuiGrid>
                    <MuiGrid item xs={12} sm>
                      <Stack spacing={2}>
                        <Typography variant="h6">
                          <Link href="#" underline="none" color="inherit">
                            {application?.candidate?.user?.name}
                          </Link>
                        </Typography>
                        <Typography color="primary" variant="subtitle1">
                          {application?.candidate?.appliedPosition}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip
                            color="primary"
                            size="small"
                            icon={<Place />}
                            label={application?.candidate?.province?.name}
                          />
                          {/* <Chip
                            color="primary"
                            size="small"
                            icon={<AccessTime />}
                            label={application?.candidate?.}
                          /> */}
                        </Stack>
                      </Stack>
                    </MuiGrid>
                    <MuiGrid item>
                      {application?.status === 0 ? (
                        <>
                          <Tooltip title="Xem Hồ Sơ">
                            <IconButton
                              color="secondary"
                              onClick={() =>
                                navigate(
                                  '/nguoi-tim-viec/thong-tin-ca-nhan/' +
                                    application?.candidate?.user?._id
                                )
                              }
                            >
                              <Visibility />
                            </IconButton>
                          </Tooltip>
                          <ButtonDialog
                            isDelete
                            title="Chấp Nhận"
                            onSubmit={() => handleUpdate({ ...application, status: 1 })}
                          >
                            <Typography variant="body1">
                              Bạn có chắc chắn muốn chấp nhận hồ sơ này?
                            </Typography>
                          </ButtonDialog>
                          <ButtonDialog
                            isDelete
                            title="Từ Chối"
                            onSubmit={() => handleUpdate({ ...application, status: 2 })}
                            button={
                              <Tooltip title="Từ Chối">
                                <IconButton color="error">
                                  <Close />
                                </IconButton>
                              </Tooltip>
                            }
                          >
                            <Typography variant="body1">
                              Bạn có chắc chắn muốn từ chối hồ sơ này?
                            </Typography>
                          </ButtonDialog>
                        </>
                      ) : application?.status === 1 ? (
                        <Typography
                          color="success"
                          variant="subtitle1"
                          sx={{ color: success.main }}
                        >
                          Đã Duyệt
                        </Typography>
                      ) : application?.status === 2 ? (
                        <Typography sx={{ color: error.main }} color="error" variant="subtitle1">
                          Đã Từ Chối
                        </Typography>
                      ) : null}
                    </MuiGrid>
                  </MuiGrid>
                </Card>
              </MuiGrid>
            ))}
          </MuiGrid>
          <Box
            fullWidth
            sx={{
              mt: 5,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={applications?.totalPages}
              page={applications?.page}
              shape="rounded"
            />
          </Box>
        </Card>
      </Container>
    </Paper>
  );
}
export default KiemDuyetHoSoPage;
