import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {

    const count = useSelector((state) => state.count)
    console.log('count',count);


    const handleCounter = () =>{
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleCounter}>
               increment
            </button>
        </div>
    );
};

export default Counter;