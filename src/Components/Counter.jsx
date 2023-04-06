import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './CounterAction';

const Counter = () => {

    const state = useSelector((state) => state)
    // console.log('count',count);

    const dispatch = useDispatch()


    const handleCounter = () =>{
        dispatch(incrementAction())
    }

    const handleDecrement = () =>{
        dispatch(decrementAction())
    }

    const handleReset = () =>{
        dispatch(resetAction())
    }
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={handleCounter}>
               increment
            </button>

            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;