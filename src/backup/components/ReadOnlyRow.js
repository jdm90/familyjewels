import React from "react";

export const ReadOnlyRow = ({ item, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{item.itemName}</td>
      <td>{item.serialNum}</td>
      <td>{item.purchaseDate}</td>
      <td>{item.warranty}</td>
      <td>{item.value}</td>
      <td>{item.condition}</td>
      <td>{item.description}</td>
      <td>{item.location}</td>
      <td>
        <button type="button" title="View more">
          <i class="fa fa-eye"></i>
        </button>
        <button
          type="button"
          title="Edit"
          onClick={(event) => handleEditClick(event, item)}
        >
          <i class="fa fa-edit fa-lg"></i>
        </button>
        <button
          type="button"
          title="Delete"
          onClick={() => handleDeleteClick(item.id)}
        >
          <i class="fa fa-trash fa-lg"></i>
        </button>
      </td>
    </tr>
  );
};
