import React from "react";

const ControlledInput = () => {
  return (
    <>
      <h1>Controlled Input</h1>
      <div className="items">
        <div className="input-item">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value="name" />
        </div>
      </div>
    </>
  );
};

export default ControlledInput;
