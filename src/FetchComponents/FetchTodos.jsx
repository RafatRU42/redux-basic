import React from 'react';
import { getTodosRequest } from './FetchAction';
import axios from 'axios'
import { TODOSFAILED, TODOSREQUEST, TODOSSUCCESS } from './FetchContents';
import { useDispatch } from 'react-redux';

const getAlltodos = () => async (dispatch) =>{

   

    dispatch({type:TODOSREQUEST})
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log('object,',data);
        dispatch({type:TODOSSUCCESS, payload:data.data})
    }
     catch (error) {
        dispatch({type:TODOSFAILED,payload:error.message})
    }
}

export default getAlltodos;