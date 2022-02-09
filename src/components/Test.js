import React, { Fragment, useState } from 'react';
import data from './mock-data.json';
import { ReadOnlyRow } from './ReadOnlyRow';
import { EditableRow } from './EditableRow';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5);

const Test = () => {
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

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      itemID: nanoid(),
      name: addFormData.name,
      category: addFormData.category,
      dateAcquired: addFormData.dateAcquired,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      itemID: editItemId,
      name: editFormData.name,
      category: editFormData.category,
      dateAcquired: editFormData.dateAcquired,
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
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items];

    const index = items.findIndex((item) => item.itemId === itemId);

    newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Date Acquired</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </form>

      <div className="row">
        <div className="col-sm-2">
          <h2>Add a Item</h2>
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
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Test;
