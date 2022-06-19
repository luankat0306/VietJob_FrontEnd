import InputField from '@/components/Field/InputField';
import FieldLayout from '@/components/FieldLayout';
import {
  useMutationCreateCareer,
  useMutationDeleteCareer,
  useMutationUpdateCareer,
  useCareers
} from '@/hooks/career';
import { selectUserInfo } from '@/redux/authSlice';
import { Delete, Edit } from '@mui/icons-material';
import {
  Box,
  Container,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ButtonDialog from './components/ButtonDialog';

function createData(title, place, applications, date, status, action) {
  return { title, place, applications, date, status, action };
}

function QuanLyNganhNghePage() {
  const info = useSelector(selectUserInfo);
  const { mutateAsync: mutateCreate, loading: loadingCreate } = useMutationCreateCareer();
  const { mutateAsync: mutateUpdate, loading: loadingUpdate } = useMutationUpdateCareer();
  const { mutateAsync: mutateDelete, loading: loadingDelete } = useMutationDeleteCareer();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: ''
    }
  });
  const { data: careers, isLoading } = useCareers({
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
      ...data
    });
  };

  const onSubmitUpdate = async (data) => {
    const { _id, __v, ...rest } = data;
    await mutateUpdate({
      ...rest,
      _id
    });
  };

  const onSubmitDelete = async (data) => {
    await mutateDelete(data?._id);
  };
  return (
    <Container>
      <Box data-aos="fade-right" sx={{ bgcolor: 'white', p: 5 }}>
        <Stack alignItems="center" justifyContent="space-between" direction="row">
          <Typography variant="h6" sx={{ pb: 2 }}>
            Quản Lý Ngành Nghề
          </Typography>
          <ButtonDialog
            isLoading={loadingCreate}
            isCreate
            title="Tạo mới ngành nghề"
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
              <TableCell sx={{ borderBottom: `2px solid black` }}>Id</TableCell>
              <TableCell sx={{ borderBottom: `2px solid black` }}>Tên Ngành Nghề</TableCell>
              <TableCell sx={{ borderBottom: `2px solid black` }}>Thao tác</TableCell>
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
                  </TableRow>
                ))
              : careers?.map((row) => (
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
                      {row._id}
                    </TableCell>
                    <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>{row.name}</TableCell>

                    <TableCell sx={{ borderBottom: `2px solid #e7e7e7` }}>
                      <Stack direction={row}>
                        <ButtonDialog
                          isLoading={loadingUpdate}
                          title="Sửa ngành nghề"
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
                          title="Xóa ngành nghề"
                          button={
                            <IconButton color="error">
                              <Delete />
                            </IconButton>
                          }
                          onSubmit={() => onSubmitDelete(row)}
                        >
                          <Typography variant="body1">
                            Bạn có chắc chắn muốn xóa ngành nghề này?
                          </Typography>
                        </ButtonDialog>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        {/* <TablePagination
            component="div"
            count={careers?.totalPage}
            page={page}
            de
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
      </Box>
    </Container>
  );
}

const PostEditForm = ({ control }) => {
  return (
    <FieldLayout md={12} lg={12} xl={12} sx={{ mt: 2 }}>
      <InputField label="Tên ngành nghề" name="name" control={control} />
    </FieldLayout>
  );
};

export default QuanLyNganhNghePage;
