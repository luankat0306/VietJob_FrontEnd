import { Box, Button, Card, Grid as MuiGrid, Stack, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../assets/banner-1.png';
import banner from '../../assets/banner.svg';
import { grey } from '../../theme/themeColors';
import AutocompleteField from '../Field/AutocompleteField';
import InputField from '../Field/InputField';
import queryString from 'query-string';
import { removeEmpty } from '@/utils/format';
import { useProvinces } from '@/hooks/province';
import { useCareers } from '@/hooks/career';
const Banner = () => {
  const { data: menuProvince } = useProvinces({});
  const { data: menuCareer } = useCareers({});
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate({
      pathname: '/viec-lam/tim-kiem',
      search: '?' + queryString.stringify(removeEmpty(data))
    });
  };

  return (
    <Box
      onMouseMove={(e) => {
        document.querySelectorAll('.layer').forEach((layer) => {
          const speed = layer.getAttribute('data-speed');

          const x = (window.innerWidth - e.pageX * speed) / 200;
          const y = (window.innerHeight - e.pageY * speed) / 200;

          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
          layer.style.transition = 'esase .5s';
        });
      }}
      sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
    >
      <MuiGrid container spacing={1} sx={{ px: 24 }}>
        <MuiGrid item xs={5}>
          <Stack data-speed="-2" className="layer" direction="column" mt={'30%'}>
            <Typography data-aos="fade-right" variant="h2" fontWeight={700}>
              Tìm việc làm phù hợp với bạn
            </Typography>
            <Box mt={4} />
            <Typography data-aos="fade-right" variant="p">
              Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat sed diam voluptua.
            </Typography>
            <Box mt={4} />

            <Card sx={{ p: 1 }}>
              <Stack direction="row" spacing={1} alignItems="stretch" flexGrow={1}>
                <InputField
                  label="Tên công việc, vị trí muốn ứng tuyển"
                  name="title"
                  control={control}
                  sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
                />
                <AutocompleteField
                  label="Tỉnh/Thành phố"
                  name="province"
                  control={control}
                  options={menuProvince?.data?.map((item) => item.name)}
                  sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
                />
                <AutocompleteField
                  label="Ngành nghề"
                  name="career"
                  control={control}
                  options={menuCareer?.data?.map((item) => item.name)}
                  sx={{ '&.MuiTextField-root': { backgroundColor: grey[200] } }}
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
            </Card>
          </Stack>
        </MuiGrid>
        <MuiGrid item xs={7}>
          <img
            data-speed="-2"
            className="layer"
            style={{
              objectFit: 'contain',
              width: '100%'
            }}
            src={banner1}
          />
        </MuiGrid>
      </MuiGrid>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}
      >
        <img
          style={{
            verticalAlign: 'middle',
            width: '100%',
            height: 'auto',
            display: 'inline-block'
          }}
          src={banner}
        ></img>
      </Box>
    </Box>
  );
};
export default Banner;
