import { DECREMENTCOUNTER, INCREMENTCOUNTER, RESETCOUNTER } from "./Constants";

// action 
export const incrementAction = () =>{
    return{
        type:INCREMENTCOUNTER
    }
}

export const decrementAction = () =>{
    return{
        type:DECREMENTCOUNTER
    }
}

export const resetAction = () =>{
    return{
        type:RESETCOUNTER
    }
}