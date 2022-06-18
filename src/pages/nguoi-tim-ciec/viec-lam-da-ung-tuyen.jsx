import { CardJob } from '@/components/CardJob';
import { useApplications } from '@/hooks/application';
import { useCandidateByUserId } from '@/hooks/candidate';
import { selectUserInfo } from '@/redux/authSlice';
import { primary } from '@/theme/themeColors';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography
} from '@mui/material';
import { useSelector } from 'react-redux';

function ViecLamDaUngTuyenPage() {
  const info = useSelector(selectUserInfo);
  const { data: candidate } = useCandidateByUserId(info._id);
  const { data: applications, isLoading } = useApplications({
    candidate: candidate?._id
  });
  return (
    <Container fixed sx={{ mt: 4, mb: 4, p: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', borderLeft: '4px solid ' + primary.main, pl: 2, mb: 4 }}
      >
        Việc làm đã ứng tuyển
      </Typography>
      <Grid container spacing={2}>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Skeleton height={'181px'} variant="rectangular" />
              </Grid>
            ))
          : applications?.data?.map(({ status, post: job }, index) => (
              <Grid key={index} item xs={12} md={6}>
                <CardJob
                  variant="outlined"
                  item={{
                    id: job._id,
                    name: job.title,
                    enterpriseName: job?.employer?.user?.name,
                    formality: job.formality,
                    wage: job.wage,
                    experience: job.experience,
                    deadline: job.deadline,
                    avatar: job?.employer?.user?.avatar,
                    status
                  }}
                />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default ViecLamDaUngTuyenPage;
