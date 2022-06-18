import { selectIsLogin } from '@/redux/authSlice';
import { EditRounded } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function ButtonApply({
  button: NewButton,
  onSubmit,
  onClick,
  isLoading = false,
  ...rest
}) {
  const isLogin = useSelector(selectIsLogin);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    if (!isLogin) {
      navigate('/dang-nhap');
      return;
    }
    onClick && onClick();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Component =
    NewButton &&
    React.cloneElement(NewButton, {
      onClick: handleClickOpen,
      style: {
        cursor: 'pointer'
      }
    });
  return (
    <>
      {NewButton ? (
        Component
      ) : (
        <Button
          onClick={handleClickOpen}
          fullWidth
          size="large"
          variant="contained"
          color="primary"
        >
          Ứng tuyển
        </Button>
      )}

      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose} {...rest}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textPrimary">
            Bạn có chắc chắn muốn ứng tuyển với công việc này?
          </Typography>
          {/* <TextareaAutosize style={{ width: '100%', minHeight: '300px' }} /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <LoadingButton
            loading={isLoading}
            color="primary"
            variant="contained"
            onClick={async () => {
              await onSubmit();
              handleClose();
            }}
          >
            Xác nhận
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
