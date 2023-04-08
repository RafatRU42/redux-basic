import { TODOSFAILED, TODOSREQUEST, TODOSSUCCESS } from "./FetchContents";

const initialState = {
    todos:[],
    error:null,
    isLoading: false
}
const fetchReduser = (state=initialState,action) =>{
    switch (action.type) {
        case TODOSREQUEST:
            return{
                ...state,
                isLoading:true

            }
            
        case TODOSSUCCESS:
                return{
                    ...state,
                    todos:action.payload,
                    isLoading:false
                }
            
        case TODOSFAILED:
            return{
                state,
                error:action.payload,
                isLoading:false
            }
    

        default:
            return state;
    }
}

export default fetchReduser;