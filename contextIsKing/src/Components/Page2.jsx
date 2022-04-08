import React from 'react';
import axios from "axios";
import { useState } from "react";
import "../Styles/Page2.css";

const Page2 = () =>
{
    return (
        <div className='p2-container'>
            <form action="">
                <p>State of residence</p>
                <input type="text" name="" required id="" />
                <p>Address</p>
                <input type="text" name="" required id="" />
                <p>Pin code</p>
                <input type="number" name="" required id="" />
                <br />
                <button className='btn'>Register</button>
            </form>
        </div>
    )
}

export default Page2;