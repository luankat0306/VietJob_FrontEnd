import { EditRounded } from '@mui/icons-material';
import { IconButton, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export default function ButtonEdit({ title, onSubmit, children, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton size="small" onClick={handleClickOpen}>
        <EditRounded fontSize="12px" />
      </IconButton>
      <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} {...rest}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
          {/* <TextareaAutosize style={{ width: '100%', minHeight: '300px' }} /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button color="primary" variant="contained" onClick={onSubmit}>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
