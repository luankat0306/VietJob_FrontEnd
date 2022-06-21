import LabelWithIcon from '@/components/Base/LabelWithIcon';
import { CardJob } from '@/components/CardJob';
import { useMutationCreateApplication } from '@/hooks/application';
import { useCandidateByUserId } from '@/hooks/candidate';
import { selectUserInfo } from '@/redux/authSlice';
import { grey, primary } from '@/theme/themeColors';
import { formatDate } from '@/utils/format';
import {
  AssignmentIndRounded,
  EqualizerRounded,
  InsertInvitationRounded,
  LayersRounded,
  LocalAtmRounded,
  MoreTimeRounded
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useJob, useJobs } from '../../hooks/job';
import ButtonApply from './components/ButtonApply';

const ChiTietViecLamPage = () => {
  const { slug } = useParams();
  const info = useSelector(selectUserInfo);
  const { data: candidate } = useCandidateByUserId(info?._id);
  const { data: job } = useJob(slug);
  const { mutateAsync: mutateApply, isLoading: isLoadingApply } = useMutationCreateApplication({
    alert: true,
    messageSuccess: 'Đã ứng tuyển thành công',
    messageError: 'Đã có lỗi xảy ra, vui lòng thử lại'
  });
  const infoEmplyer = [
    {
      icon: MoreTimeRounded,
      title: 'Ngày đăng:',
      content: formatDate(job?.createAt)
    },
    {
      icon: InsertInvitationRounded,
      title: 'Ngày hết hạn:',
      content: formatDate(job?.deadline)
    },
    // {
    //   icon: LocationCityRounded,
    //   title: 'Địa điểm:',
    //   content: 'Hồ Chí Minh'
    // },
    {
      icon: EqualizerRounded,
      title: 'Cấp bậc:',
      content: job?.level
    },
    {
      icon: LayersRounded,
      title: 'Kinh nghiệm:',
      content: job?.experience
    },
    {
      icon: LocalAtmRounded,
      title: 'Mức lương:',
      content: job?.wage
    },
    {
      icon: AssignmentIndRounded,
      title: 'Số lượng:',
      content: job?.quantity
    }
  ];
  const { data: jobs, isLoading } = useJobs({
    page: 6,
    limit: 6
  });

  const onSubmit = async (data) => {
    await mutateApply({
      candidateId: candidate?._id,
      postId: job?._id
    });
  };
  return (
    <Container fixed sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={8}>
          <Typography component="div" variant="h3" fontWeight={700}>
            {job?.title}
          </Typography>
          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Mô tả công việc:
          </Typography>
          <Typography mt={1} component="div" variant="body2" color="textSecondary">
            <Box dangerouslySetInnerHTML={{ __html: job?.description }} />
          </Typography>
          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Yêu cầu công việc:
          </Typography>
          <Typography mt={1} component="div" variant="body2" color="textSecondary">
            <Box dangerouslySetInnerHTML={{ __html: job?.required }} />
          </Typography>

          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Quyền lợi:
          </Typography>
          <Typography mt={1} component="div" variant="body2" color="textSecondary">
            <Box dangerouslySetInnerHTML={{ __html: job?.benefit }} />
          </Typography>
          <Typography mt={2} component="div" variant="h6" fontWeight={700}>
            Địa điểm làm việc:
          </Typography>
          <Typography mt={1} component="div" variant="body2" color="textSecondary">
            <Box dangerouslySetInnerHTML={{ __html: job?.address }} />
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography my={2} component="div" variant="h6" fontWeight={700}>
              Ngành nghề:
            </Typography>
            {job?.careers?.map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 1,
                  bgcolor: grey[200],
                  color: grey[600],
                  fontWeight: 700
                }}
              >
                {item}
              </Card>
            ))}
          </Stack>

          <Divider />

          <Stack direction="row" spacing={2} alignItems="center">
            <Typography my={2} component="div" variant="h6" fontWeight={700}>
              Khu vực:
            </Typography>
            {job?.provinces?.map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 1,
                  bgcolor: grey[200],
                  color: grey[600],
                  fontWeight: 700
                }}
              >
                {item}
              </Card>
            ))}
          </Stack>
          <Divider />

          <Typography
            // sx={{ borderLeft: `4px solid ${primary.main}`, pl: 1 }}
            mt={2}
            component="div"
            variant="h6"
            fontWeight={700}
          >
            Việc làm liên quan:
          </Typography>
          <Card sx={{ mt: 2 }} variant="outlined">
            <CardContent sx={{ backgroundColor: '#f3f6f9' }}>
              <Grid container spacing={2}>
                {jobs?.data?.map((job, index) => (
                  <Grid key={index} item xs={12} md={6}>
                    <CardJob
                      item={{
                        id: job._id,
                        name: job.title,
                        enterpriseName: job?.employer?.user?.name,
                        formality: job.formality,
                        wage: job.wage,
                        experience: job.experience,
                        deadline: job.deadline,
                        avatar: job?.employer?.user?.avatar
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          {/* </Typography> */}
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Card variant="outlined" sx={{ bgcolor: primary[50] }}>
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ mt: 1, bgcolor: '#fff', width: 56, height: 56 }}
                  src={job?.employer?.user?.avatar}
                  variant="rounded"
                >
                  N
                </Avatar>
                <Stack>
                  <Typography variant="h6" fontWeight={500}>
                    {job?.employer?.user?.name}
                  </Typography>
                  <Typography className="job-des" variant="body2" color="textSecondary">
                    {job?.employer?.description}
                  </Typography>
                </Stack>
              </Stack>
              <Divider sx={{ my: 2, borderColor: primary[100] }} />
              {infoEmplyer.map(({ icon: Icon, title, content }) => {
                return (
                  <>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <LabelWithIcon>
                        <Icon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="body2" color="textPrimary">
                          <strong>{title}</strong>
                        </Typography>
                      </LabelWithIcon>

                      <Typography variant="body2" color="GrayText">
                        <strong>{content}</strong>
                      </Typography>
                    </Stack>
                    <Divider sx={{ my: 2, borderColor: primary[100] }} />
                  </>
                );
              })}
              {/* <Box mt={4} display="flex" justifyContent="center"> */}
              {/* <Button fullWidth size="large" variant="contained" color="primary">
                Ứng tuyển
              </Button> */}
              {/* </Box> */}

              {info?.role === 0 && <ButtonApply isLoading={isLoadingApply} onSubmit={onSubmit} />}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChiTietViecLamPage;
