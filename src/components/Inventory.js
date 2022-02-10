import React, { Fragment, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import '../App.css';
import { ReadOnlyRow } from './ReadOnly';
import { EditableRow } from './Editable';
import data from './mock-data.json';
import { customAlphabet } from 'nanoid';
import AddItemModal from './AddItemModal';
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

export default function CollapsibleTable() {
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    itemID: '',
    name: '',
    category: '',
    dateAcquired: '',
  });

  const [editFormData, setEditFormData] = useState({
    itemID: '',
    name: '',
    category: '',
    dateAcquired: '',
  });

  const [editItemId, setEditItemId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      itemID: editItemId,
      name: editFormData.name,
      category: editFormData.category,
      dateAcquired: editFormData.dateAcquired,
      serialNum: addFormData.serialNum,
      value: addFormData.value,
      condition: addFormData.condition,
      location: addFormData.location,
    };

    const newItems = [...items];

    const index = items.findIndex((item) => item.itemID === editItemId);

    newItems[index] = editedItem;

    setItems(newItems);
    setEditItemId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.itemID);

    const formValues = {
      itemID: item.itemID,
      name: item.name,
      category: item.category,
      dateAcquired: item.dateAcquired,
      serialNum: addFormData.serialNum,
      value: addFormData.value,
      condition: addFormData.condition,
      location: addFormData.location,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items];

    const index = items.findIndex((item) => item.itemID === itemId);

    newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <>
      <div className="container">
        <h3>Your Inventory</h3>
        <TableContainer component={Paper} style={{ height: '500px' }}>
          <form onSubmit={handleEditFormSubmit}>
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
                {items.map((item) => (
                  <Fragment>
                    {editItemId === item.itemID ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        item={item}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </form>
        </TableContainer>
        <Stack className="m-3" spacing={2} direction="row">
          <Tooltip title="Add an item" arrow>
            <AddItemModal />
          </Tooltip>
        </Stack>
      </div>
    </>
  );
}
