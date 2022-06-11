import { useCareers } from '@/hooks/career';
import { useProvinces } from '@/hooks/province';
import { removeEmpty } from '@/utils/format';
import { AppBar, Box, Button, Container, Stack, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AutocompleteField from '../Field/AutocompleteField';
import InputField from '../Field/InputField';
import queryString from 'query-string';

function SearchBar() {
  const { data: menuProvince } = useProvinces({});
  const { data: menuCareer } = useCareers({});
  const { control, reset, handleSubmit } = useForm();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const title = searchParams.get('title');
    const province = searchParams.get('province');
    const career = searchParams.get('career');
    reset({ title, province, career });
  }, [searchParams]);

  const onSubmit = (data) => {
    navigate({
      pathname: '/viec-lam/tim-kiem',
      search: '?' + queryString.stringify(removeEmpty(data))
    });
  };
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container fixed>
        <Toolbar sx={{ px: '0px !important' }}>
          <Stack sx={{ my: 2 }} direction="row" spacing={1} alignItems="stretch" flexGrow={1}>
            <InputField
              label="Tên công việc, vị trí muốn ứng tuyển"
              name="title"
              control={control}
            />
            <AutocompleteField
              label="Tỉnh/Thành phố"
              name="province"
              control={control}
              options={menuProvince?.data?.map((item) => item.name)}
            />
            <AutocompleteField
              label="Ngành nghề"
              name="career"
              control={control}
              options={menuCareer?.data?.map((item) => item.name)}
            />

            <Box>
              <Button
                sx={{ width: '96px' }}
                variant="contained"
                color="primary"
                onClick={handleSubmit(onSubmit)}
              >
                Tìm Kiếm
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default SearchBar;
