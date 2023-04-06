import { DECREMENTCOUNTER, INCREMENTCOUNTER, RESETCOUNTER } from "./Constants";
import { initialCounterStates } from "./CounterStates";

const initialStates = {count:4,students:3}

const CounterReducer = (state=initialStates,action) =>{
    switch (action.type) {
        case INCREMENTCOUNTER:
            return{
                count: state.count + 1,
                
            }
        case DECREMENTCOUNTER:
            return{
                count: state.count - 1,

            }
        case RESETCOUNTER:
            return{
                count: 0

            }
            
            
    
        default:
            return state;
    }
}

export default CounterReducer;