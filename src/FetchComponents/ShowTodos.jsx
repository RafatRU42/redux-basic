import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAlltodos from './FetchTodos';

const ShowTodos = () => {
    const [data,setData] = useState()
    // console.log('data',data);
    const {isLoading,error,todos} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAlltodos())
    },[])
    return (
        <div>
            <h1>Todos App</h1>
           {isLoading && <h3>Loading</h3>}
           {error && <h3>{error.message}</h3>}

           <section>
          {/* {todos && todos.map((todo) => <h1>{todo.data}</h1> } */}
          {
            todos.map((todo) => <h1>{todo.id}</h1>)
          }
           </section>
        </div>
    );
};

export default ShowTodos;