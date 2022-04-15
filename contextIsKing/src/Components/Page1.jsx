import React from "react";
import "../Styles/Page1.css";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Link, useNavigate } from "react-router-dom";

const Page1 = () => {
  const { name, age, dateOfBirth, dispatch } =
    React.useContext(RegistrationContext);
  const navigate = useNavigate();

  return (
    <div className="p1-container">
      <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            dispatch({ type: "CHANGE_NAME", payload: e.target.value })
          }
        />
        <p>Age</p>
        <input
          type="number"
          value={age}
          onChange={(e) =>
            dispatch({ type: "CHANGE_AGE", payload: e.target.value })
          }
        />
        <p>Date of birth</p>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) =>
            dispatch({ type: "CHANGE_DATE_OF_BIRTH", payload: e.target.value })
          }
        />
        <br />
        <button
          className="btn"
          disabled={!name && !age && !dateOfBirth}
          onClick={() => {
            navigate(`/registration/two`);
          }}
        >
          Proceed
        </button>
    </div>
  );
};

export default Page1;
