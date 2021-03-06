import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NotesModal from './NotesModal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhotoModal from './PhotoModal';

export const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{item.itemID}</TableCell>
        <TableCell component="th" scope="row">
          {item.name}
        </TableCell>
        <TableCell>{item.category}</TableCell>
        <TableCell>{item.dateAcquired}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Stack spacing={2} direction="row">
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  startIcon={<EditIcon />}
                  onClick={(event) => handleEditClick(event, item)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDeleteClick(item.itemID)}
                >
                  Delete
                </Button>
                <PhotoModal />
                <NotesModal />
              </Stack>
              <Typography variant="h6" gutterBottom component="div">
                {item.name}
              </Typography>
              <Typography variant="h7" gutterBottom component="div">
                {item.description}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Serial/Product #</TableCell>
                    <TableCell>Estimated Value</TableCell>
                    <TableCell>Condition</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{item.serialNum}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>{item.condition}</TableCell>
                    <TableCell>{item.location}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
