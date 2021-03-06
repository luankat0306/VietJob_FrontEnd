import { CardJob } from '@/components/CardJob';
import AutocompleteField from '@/components/Field/AutocompleteField';
import { removeEmpty } from '@/utils/format';
import { experiences, formalities, levels, salaries } from '@/utils/optionsData';
import { NavigateNext } from '@mui/icons-material';
import {
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Pagination,
  Skeleton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useJobs } from '../../hooks/job';

function TimKiemViecLamPage() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="text.primary">
      Tìm kiếm việc làm
    </Typography>
  ];
  const { control, watch } = useForm();

  const formality = watch('formality');
  const level = watch('level');
  const experience = watch('experience');
  const wage = watch('wage');

  const [searchParams] = useSearchParams();
  const [title, province, career] = [
    searchParams.get('title'),
    searchParams.get('province'),
    searchParams.get('career')
  ];
  const [filter, setFilter] = useState({
    page: 1,
    limit: 10,
    ...removeEmpty({
      province,
      career,
      title
    })
  });
  const { data: jobs, isLoading } = useJobs({
    ...filter,
    ...removeEmpty({
      province,
      career,
      title,
      formality,
      level,
      experience,
      wage
    })
  });
  useEffect(() => {
    setFilter((prev) => ({ ...prev, page: 1 }));
  }, [searchParams]);
  return (
    <Container sx={{ mt: 2 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Card sx={{ mt: 2 }} variant="outlined">
        <CardActions sx={{ p: 2 }}>
          <Stack direction="row" spacing={1} flexGrow={1}>
            <AutocompleteField
              name="formality"
              label="Hình thức làm việc"
              control={control}
              options={formalities}
            />
            <AutocompleteField name="level" label="Cấp bậc" control={control} options={levels} />
            <AutocompleteField
              name="experience"
              label="Kinh nghiệm làm việc"
              control={control}
              options={experiences}
            />
            <AutocompleteField name="wage" label="Mức lương" control={control} options={salaries} />
          </Stack>
        </CardActions>
        <CardContent sx={{ backgroundColor: '#f3f6f9' }}>
          <Grid container spacing={2}>
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Skeleton height={'181px'} variant="rectangular" />
                  </Grid>
                ))
              : jobs?.data?.map((job, index) => (
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
          <Box mt={2} />
          <Stack justifyContent="center" direction="row">
            <Pagination
              variant="text"
              page={filter.page}
              count={Math.floor((jobs?.totalPage ?? 9) / 10) ?? 1}
              onChange={(event, value) => {
                setFilter({ ...filter, page: value });
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default TimKiemViecLamPage;
