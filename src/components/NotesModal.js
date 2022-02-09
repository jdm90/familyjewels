import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NotesIcon from '@mui/icons-material/Notes';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function NotesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        size="small"
        variant="contained"
        color="info"
        startIcon={<NotesIcon />}
        onClick={handleOpen}
      >
        Notes
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={1} direction="row" className="mb-3">
            <Button
              size="small"
              variant="contained"
              color="info"
              startIcon={<AddBoxIcon />}
            >
              Add
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Stack>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Notes
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li>Note 1</li>
              <li>Note 2</li>
              <li>Note 3</li>
              <li>Note 4</li>
              <li>Note 5</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
