import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Button } from '@mui/material';
import data from './mock-data.json';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddItemModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    itemID: '',
    name: '',
    category: '',
    dateAcquired: '',
    serialNum: '',
    value: '',
    condition: '',
    location: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      itemID: nanoid(),
      name: addFormData.name,
      category: addFormData.category,
      dateAcquired: addFormData.dateAcquired,
      serialNum: addFormData.serialNum,
      value: addFormData.value,
      condition: addFormData.condition,
      location: addFormData.location,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  return (
    <>
      <Fab size="medium" color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>Add an Item</h5>
          <div className="row">
            <div className="col">
              <form onSubmit={handleAddFormSubmit}>
                <input
                  type="text"
                  name="name"
                  required="required"
                  placeholder="Enter an item name..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="category"
                  required="required"
                  placeholder="Enter a category..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="dateAcquired"
                  required="required"
                  placeholder="Enter an acquisition date..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="serialNum"
                  required="required"
                  placeholder="Enter a serial or product number..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="value"
                  required="required"
                  placeholder="Enter an estimated value..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="condition"
                  required="required"
                  placeholder="Enter item condition..."
                  onChange={handleAddFormChange}
                />
                <input
                  type="text"
                  name="location"
                  required="required"
                  placeholder="Enter item location..."
                  onChange={handleAddFormChange}
                />
                <Button type="submit">Add</Button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
