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
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NotesModal from './NotesModal';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../App.css';
import PhotoModal from './PhotoModal';

function createData(itemID, name, category, dateAcquired, description, price) {
  return {
    itemID,
    name,
    category,
    dateAcquired,
    price,
    description,
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
                <PhotoModal />
                <NotesModal />
              </Stack>
              <Typography variant="h6" gutterBottom component="div">
                {row.name}
              </Typography>
              <Typography variant="h7" gutterBottom component="div">
                {row.description}
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
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(1, 'Necklace', 'Jewelry', '1/1/21', 'Description of necklace.'),
  createData(2, 'Bracelet', 'Jewelry', '1/1/21', 'Description of bracelet.'),
  createData(3, 'TV', 'Electronics', '1/1/21', 'Description of TV.'),
  createData(4, 'iPad', 'Electronics', '1/1/21', 'Description of iPad.'),
  createData(5, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(6, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(7, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(8, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(9, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(10, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(11, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(12, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(13, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(14, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
  createData(15, 'Xbox', 'Electronics', '1/1/21', 'Description of Xbox.'),
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
        <Stack className="m-3" spacing={2} direction="row">
          <Tooltip title="Add an item" arrow>
            <Fab size="medium" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Tooltip>
        </Stack>
      </div>
    </>
  );
}
