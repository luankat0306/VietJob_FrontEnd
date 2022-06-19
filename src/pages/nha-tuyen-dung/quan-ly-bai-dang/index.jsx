import * as React from 'react';
import {
  Paper,
  Container,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Chip,
  Button,
  Skeleton
} from '@mui/material';
import { Edit, Delete, Place, Add } from '@mui/icons-material';
import ButtonDialog from './components/ButtonDialog';
import FieldLayout from '@/components/FieldLayout';
import InputField from '@/components/Field/InputField';
import CKEditorField from '@/components/Field/CKEditorField';
import AutocompleteField from '@/components/Field/AutocompleteField';
import { useProvinces } from '@/hooks/province';
import { useCareers } from '@/hooks/career';
import { useForm } from 'react-hook-form';
import DatePickerField from '@/components/Field/DatePickerField';
import { levels, salarys, formalities, experiences } from '@/utils/optionsData';
import {
  useJobs,
  useMutationCreateJob,
  useMutationDeleteJob,
  useMutationUpdateJob
} from '@/hooks/job';
import { useEmployerByUserId } from '@/hooks/employer';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '@/redux/authSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { primary } from '@/theme/themeColors';

function createData(title, place, applications, date, status, action) {
  return { title, place, applications, date, status, action };
}

const rows = [
  createData(
    'Product Designer',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  ),
  createData(
    'Android Developer',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  ),
  createData(
    'Senior Manager',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  ),
  createData(
    'Digital Marketer',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  ),
  createData(
    'Web Developer',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  ),
  createData(
    'UI/UX Designer',
    '32, Wales Street, New York, USA',
    '5+ Applied',
    'November 27, 2020, to December 25, 2021',
    'Active',
    ''
  )
];

function QuanLyBaiDangPage() {
  const info = useSelector(selectUserInfo);
  const { data: employer } = useEmployerByUserId(info?._id);
  const { mutateAsync: mutateCreate, loading: loadingCreate } = useMutationCreateJob();
  const { mutateAsync: mutateUpdate, loading: loadingUpdate } = useMutationUpdateJob();
  const { mutateAsync: mutateDelete, loading: loadingDelete } = useMutationDeleteJob();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      level: '',
      experience: '',
      wage: '',
      formality: '',
      quantity: 0,
      gender: 1,
      deadline: null,
      description: '',
      required: '',
      benefit: '',
      address: '',
      careers: [],
      provinces: []
    }
  });
  const { data: jobs, isLoading } = useJobs({
    employer: employer?._id,
    page: page + 1,
    limit: rowsPerPage
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onSubmitCreate = async (data) => {
    await mutateCreate({
      ...data,
      employerId: employer?._id,
      quantity: data.quantity ? parseInt(data.quantity) : 0,
      gender: 1
    });
  };

  const onSubmitUpdate = async (data) => {
    const { _id, __v, createAt, employer, ...rest } = data;
    await mutateUpdate({
      ...rest,
      _id,
      employerId: employer?._id,
      quantity: data.quantity ? parseInt(data.quantity) : 0,
      gender: 1
    });
  };

  const onSubmitDelete = async (data) => {
    await mutateDelete(data?._id);
  };
  return (
    <Paper sx={{ bgcolor: 'whitesmoke', py: 5 }}>
      <Container>
        <Box data-aos="fade-right" sx={{ bgcolor: 'white', p: 5 }}>
          <Stack alignItems="center" justifyContent="space-between" direction="row">
            <Typography variant="h6" sx={{ pb: 2 }}>
              Quản Lý Bài Đăng
            </Typography>
            <ButtonDialog
              isLoading={loadingCreate}
              isCreate
              title="Đăng tin tuyển dụng"
              onClick={() => {
                reset({});
              }}
              onSubmit={handleSubmit(onSubmitCreate)}
            >
              <PostEditForm control={control} />
            </ButtonDialog>
          </Stack>

          <Table size="small" data-aos="fade-right" sx={{ borderCollapse: 'separate' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: `2px solid black` }}>Tiêu Đề</TableCell>
                <TableCell sx={{ borderBottom: `2px solid black` }}>Số Lượng Ứng Viên</TableCell>
                <TableCell sx={{ borderBottom: `2px solid black` }}>Thời Hạn</TableCell>
                {/* <TableCell sx={{ borderBottom: `2px solid black` }}>Trạng Thái</TableCell> */}
                <TableCell sx={{ borderBottom: `2px solid black` }}>Thao Tác</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading
                ? Array.from({ length: rowsPerPage }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Skeleton width="100%" height="40px" variant="text" />
                      </TableCell>
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Skeleton width="100%" height="40px" variant="text" />
                      </TableCell>
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Skeleton width="100%" height="40px" variant="text" />
                      </TableCell>
                      {/* <TableCell>Loading...</TableCell> */}
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Skeleton width="100%" height="40px" variant="text" />
                      </TableCell>
                    </TableRow>
                  ))
                : jobs?.data?.map((row) => (
                    <TableRow
                      data-aos="fade-right"
                      key={row.title}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        transition: 'ease-in-out 0.3s',
                        ':hover': {
                          boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)`
                        }
                      }}
                    >
                      <TableCell
                        sx={{ borderBottom: `2px solid #e7e7e7` }}
                        component="th"
                        scope="row"
                      >
                        <Link
                          style={{
                            textDecoration: 'underline',
                            color: primary[500]
                          }}
                          to={'/nha-tuyen-dung/kiem-duyet-ho-so/' + row._id}
                        >
                          {row.title}
                        </Link>
                      </TableCell>
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        {row.quantity}
                      </TableCell>
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7`, color: '#646464' }}>
                        {row.deadline ? moment(row.deadline).format('DD/MM/YYYY') : '-'}
                      </TableCell>
                      {/* <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Chip size="small" label={row.status} color="success" />
                      </TableCell> */}
                      <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                        <Stack direction={row}>
                          <ButtonDialog
                            isLoading={loadingUpdate}
                            title="Sửa tin tuyển dụng"
                            onClick={() => {
                              reset(row);
                            }}
                            button={
                              <IconButton color="primary">
                                <Edit />
                              </IconButton>
                            }
                            onSubmit={handleSubmit(onSubmitUpdate)}
                          >
                            <PostEditForm control={control} />
                          </ButtonDialog>

                          <ButtonDialog
                            isDelete
                            isLoading={loadingDelete}
                            title="Xóa tin tuyển dụng"
                            button={
                              <IconButton color="error">
                                <Delete />
                              </IconButton>
                            }
                            onSubmit={() => onSubmitDelete(row)}
                          >
                            <Typography variant="body1">
                              Bạn có chắc chắn muốn xóa tin tuyển dụng này?
                            </Typography>
                          </ButtonDialog>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={jobs?.totalPage}
            page={page}
            de
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Container>
    </Paper>
  );
}

const PostEditForm = ({ control }) => {
  const { data: menuProvince } = useProvinces({});
  const { data: menuCareer } = useCareers({});
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <InputField label="Tiêu đề" name="title" control={control} />
      <AutocompleteField label="Cấp bậc" name="level" control={control} options={levels} />
      <AutocompleteField
        label="Kinh nghiệm"
        name="experience"
        control={control}
        options={experiences}
      />
      <AutocompleteField label="Mức lương" name="wage" control={control} options={salarys} />
      <AutocompleteField
        label="Hình thức làm việc"
        name="formality"
        control={control}
        options={formalities}
      />
      <InputField type="number" label="Số lượng cần tuyển" name="quantity" control={control} />
      <DatePickerField label="Hạn nộp hồ sơ" name="deadline" control={control} />
      <CKEditorField
        label="Mô tả công việc"
        name="description"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />

      <CKEditorField
        label="Yêu cầu công việc"
        name="required"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
      <CKEditorField
        label="Quyền lợi"
        name="benefit"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
      <CKEditorField
        label="Địa điểm làm việc"
        name="address"
        control={control}
        style={{ width: '100%', minHeight: '300px' }}
      />
      <AutocompleteField
        multiple
        label="Ngành nghề"
        name="careers"
        control={control}
        options={menuCareer?.map((item) => item.name)}
      />
      <AutocompleteField
        multiple
        label="Khu vực"
        name="provinces"
        control={control}
        options={menuProvince?.map((item) => item.name)}
      />
    </FieldLayout>
  );
};

export default QuanLyBaiDangPage;
