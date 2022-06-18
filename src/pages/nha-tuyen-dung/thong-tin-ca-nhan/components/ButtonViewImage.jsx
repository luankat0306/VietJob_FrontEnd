import { Image } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { IconButton, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function ButtonViewImage({
  button: NewButton,
  title,
  onSubmit,
  image,
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
      ) : (
        <Tooltip title="Ảnh đính kèm">
          <IconButton size="small" onClick={handleClickOpen} sx={sx}>
            <Image fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {/* {children} */}
          {/* <TextareaAutosize style={{ width: '100%', minHeight: '300px' }} /> */}
          <img src={image} alt="" style={{ width: '100%' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          {/* <LoadingButton
            loading={isLoading}
            color="primary"
            variant="contained"
            onClick={async () => {
              await onSubmit();
              handleClose();
            }}
          >
            Lưu
          </LoadingButton> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
