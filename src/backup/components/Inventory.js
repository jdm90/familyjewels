import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import '../App.css';
import Row from './ReadOnly';

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
