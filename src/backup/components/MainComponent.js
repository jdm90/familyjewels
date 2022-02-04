import React from "react";

export const MainComponent = () => {
  return (
    <div className="container">
      <form>
        <table>
          <thead>
            <tr>
              <td>Item Name</td>
              <td>Serial/Product #</td>
              <td>Date Purchased</td>
              <td>Warranty</td>
              <td>Value</td>
              <td>Condition</td>
              <td>Description</td>
              <td>Location</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </table>
      </form>

      <div className="row">
        <div className="col-sm-2">
          <h2>Add a Contact</h2>
          <form onSubmit={console.log("submitted")}>
            <input
              type="text"
              name="fullName"
              required="required"
              placeholder="Enter a name..."
              //onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="address"
              required="required"
              placeholder="Enter an address..."
              //onChange={handleAddFormChange}
            />
            <input
              type="text"
              name="phoneNumber"
              required="required"
              placeholder="Enter a phone number..."
              //onChange={handleAddFormChange}
            />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter an email address..."
              //onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
