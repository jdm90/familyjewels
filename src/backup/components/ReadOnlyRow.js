import React from 'react';

export const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{item.itemID}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.dateAcquired}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, item)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(item.itemID)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
