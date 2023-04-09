import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { fetchPost } from './PostSlice';

const ShowExtra = () => {

    const posts = useSelector((state) => state)
    console.log(posts);

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchPost())
    },[])

    return (
        <div>
            <h1>{posts}</h1>
        </div>
    );
};

export default ShowExtra;