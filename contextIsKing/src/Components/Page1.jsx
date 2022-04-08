import React from 'react';
import axios from "axios";
import { useState } from "react";
import "../Styles/Page1.css";
import { Link } from 'react-router-dom'

const Page1 = () =>
{
    return (
        <div className='p1-container'>
            <form action="">
                <p>Name</p>
                <input type="text" name="" required id="" />
                <p>Age</p>
                <input type="number" name="" required id="" />
                <p>Date of birth</p>
                <input type="date" name="" required id="" />
                <br />
                <Link to={`/registration/two`}><button className='btn'>Proceed</button></Link>
            </form>
        </div>
    )
}

export default Page1;