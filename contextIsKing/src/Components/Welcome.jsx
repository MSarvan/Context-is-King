import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Welcome.css";


const Welocme = () => {
  return (
    <div>
      <Link to={`/registration/one`} ><button className="w-btn">Click here to Register</button></Link>
    </div>
  );
};

export default Welocme;
