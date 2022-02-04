import React, { Component, Fragment, useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { nanoid } from "nanoid";
import "./App.css";
import TopNav from "./components/TopNav";
import FooterComponent from "./components/FooterComponent";
import data from "./mock-data.json";
import { ReadOnlyRow } from "./components/ReadOnlyRow";
import { EditableRow } from "./components/EditableRow";

const App = () => {
  const [items, setItems] = useState(data);
  const [addFormData, setAddFormData] = useState({
    itemName: "",
    serialNum: "",
    purchaseDate: "",
    warranty: "",
    value: "",
    condition: "",
    description: "",
    location: "",
  });

  const [editFormData, setEditFormData] = useState({
    itemName: "",
    serialNum: "",
    purchaseDate: "",
    warranty: "",
    value: "",
    condition: "",
    description: "",
    location: "",
  });

  const [editItemId, setEditItemId] = useState(null);

  /*
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  */

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  /*
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      itemName: addFormData.itemName,
      serialNum: addFormData.serialNum,
      purchaseDate: addFormData.purchaseDate,
      warranty: addFormData.warranty,
    };

    const newItems = [...items, newItems];
    setItems(newItems);
  };
  */

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedItem = {
      id: editItemId,
      itemName: editFormData.itemName,
      serialNum: editFormData.serialNum,
      purchaseDate: editFormData.purchaseDate,
      warranty: editFormData.warranty,
      value: editFormData.value,
      condition: editFormData.condition,
      description: editFormData.description,
      location: editFormData.location,
    };

    const newItems = [...items];

    const index = items.findIndex((item) => item.id === editItemId);

    newItems[index] = editedItem;

    setItems(newItems);
    setEditItemId(null);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.id);

    const formValues = {
      itemName: item.itemName,
      serialNum: item.serialNum,
      purchaseDate: item.purchaseDate,
      warranty: item.warranty,
      value: item.value,
      condition: item.condition,
      description: item.description,
      location: item.location,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items];

    const index = items.findIndex((item) => item.id === itemId);

    newItems.splice(index, 1);

    setItems(newItems);
  };

  return (
    <div>
      <Navbar className="nav-container" dark>
        <div className="container">
          <NavbarBrand href="/">Family Jewels</NavbarBrand>
          <TopNav />
        </div>
      </Navbar>

      <div className="container table-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Serial/Product #</th>
                <th>Date Purchased</th>
                <th>Warranty</th>
                <th>Value</th>
                <th>Condition</th>
                <th>Description</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <Fragment>
                  {editItemId === item.id ? (
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
      </div>

      <div className="footer fixed-bottom">
        <FooterComponent />
      </div>
    </div>
  );
};

export default App;
