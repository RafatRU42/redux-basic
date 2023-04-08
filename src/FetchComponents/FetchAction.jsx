import {TODOSFAILED,TODOSREQUEST,TODOSSUCCESS} from '../FetchComponents/FetchContents'



export const getTodosRequest = () =>{
    return{
        type:TODOSREQUEST
    }
}

export const getTodosSuccess = (data) =>{
    return{
        type:TODOSSUCCESS,
        payload:data
    }
}

export const getTodosFailed = (message) =>{
    return{
        type:TODOSFAILED,
        payload:message
    }
}