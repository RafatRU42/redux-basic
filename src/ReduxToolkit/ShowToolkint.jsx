import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,reset } from './CounterSlice';

const ShowToolkint = () => {


    const resetCounter = () =>{
        dispatch(reset())
    }

    const dispatch = useDispatch()

    const data = useSelector((state) =>state.counter.count)
    console.log(data);

    return (
        <div>
            <h1>Counter view</h1>
            <h1>Count: {data}</h1>

            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>

            <button onClick={resetCounter}>Reset</button>


        </div>
    );
};

export default ShowToolkint;