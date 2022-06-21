import { CloseRounded, EditRounded } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function ButtonEdit({
  button: NewButton,
  isDelete,
  title,
  onSubmit,
  children,
  sx,
  onClick,
  fontSize,
  isLoading = false,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
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
      ) : isDelete ? (
        <IconButton color="error" size="small" onClick={handleClickOpen} sx={sx}>
          <CloseRounded
            sx={{
              fontSize: fontSize
            }}
            fontSize="small"
          />
        </IconButton>
      ) : (
        <IconButton size="small" onClick={handleClickOpen} sx={sx}>
          <EditRounded
            sx={{
              fontSize: fontSize
            }}
            fontSize="small"
          />
        </IconButton>
      )}

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
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
            {isDelete ? 'Xác nhận' : 'Lưu'}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
