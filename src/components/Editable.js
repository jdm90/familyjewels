import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <TableRow>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter an ID..."
          name="itemID"
          value={editFormData.itemID}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter an item name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter a category..."
          name="category"
          value={editFormData.category}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <input
          type="text"
          required="required"
          placeholder="Enter an acquisition date..."
          name="dateAcquired"
          value={editFormData.dateAcquired}
          onChange={handleEditFormChange}
        ></input>
      </TableCell>
      <TableCell>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </TableCell>
    </TableRow>
  );
};
