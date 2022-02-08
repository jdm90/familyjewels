import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import NotesIcon from '@mui/icons-material/Notes';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../App.css';

function createData(itemID, name, category, dateAcquired, price) {
  return {
    itemID,
    name,
    category,
    dateAcquired,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
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
        <TableCell>{row.itemID}</TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.category}</TableCell>
        <TableCell>{row.dateAcquired}</TableCell>
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
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  startIcon={<PhotoLibraryIcon />}
                >
                  Photos
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  startIcon={<NotesIcon />}
                >
                  Notes
                </Button>
              </Stack>
              <Typography variant="h6" gutterBottom component="div">
                {row.name}
              </Typography>
              <Typography variant="h7" gutterBottom component="div">
                Description of item...
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
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    category: PropTypes.string.isRequired,
    dateAcquired: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    itemID: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, 'Necklace', 'Jewelry', '1/1/21'),
  createData(2, 'Bracelet', 'Jewelry', '1/1/21'),
  createData(3, 'TV', 'Electronics', '1/1/21'),
  createData(4, 'iPad', 'Electronics', '1/1/21'),
  createData(5, 'Xbox', 'Electronics', '1/1/21'),
  createData(6, 'Xbox', 'Electronics', '1/1/21'),
  createData(7, 'Xbox', 'Electronics', '1/1/21'),
  createData(8, 'Xbox', 'Electronics', '1/1/21'),
  createData(9, 'Xbox', 'Electronics', '1/1/21'),
  createData(10, 'Xbox', 'Electronics', '1/1/21'),
  createData(11, 'Xbox', 'Electronics', '1/1/21'),
  createData(12, 'Xbox', 'Electronics', '1/1/21'),
  createData(13, 'Xbox', 'Electronics', '1/1/21'),
  createData(14, 'Xbox', 'Electronics', '1/1/21'),
  createData(15, 'Xbox', 'Electronics', '1/1/21'),
];

export default function CollapsibleTable() {
  return (
    <>
      <div className="container">
        <h3>Your Inventory</h3>
        <TableContainer component={Paper} style={{ height: '500px' }}>
          <Table stickyHeader aria-label="collapsible table">
            <TableHead className="tableheader">
              <TableRow>
                <TableCell />
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date Acquired</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
