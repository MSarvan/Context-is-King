import React from "react";
import "../Styles/Page2.css";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";

const Page2 = () => {
  const {
    dispatch,
    stateOfResidence,
    address,
    pincode,
    name,
    age,
    dateOfBirth,
    handleSubmit,
  } = React.useContext(RegistrationContext);

  if (!name || !age || !dateOfBirth) {
    return <Navigate to="/registration/one" />;
  }

  return (
    <div className="p2-container">
      <p>State of residence</p>
        <input
          type="text"
          value={stateOfResidence}
          onChange={(e) => {
            dispatch({
              type: "CHANGE_STATE_OF_RESIDENCE",
              payload: e.target.value,
            });
          }}
        />
        <p>Address</p>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            dispatch({
              type: "CHANGE_ADDRESS",
              payload: e.target.value,
            });
          }}
        />
        <p>Pin code</p>
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            dispatch({
              type: "CHANGE_PINCODE",
              payload: e.target.value,
            });
          }}
        />
        <br />
        <button
          className="btn"
          disabled={
            !stateOfResidence ||
            !address ||
            !pincode ||
            !name ||
            !age ||
            !dateOfBirth
          }
          onClick={handleSubmit}
        >
          Register
        </button>
    </div>
  );
};

export default Page2;
