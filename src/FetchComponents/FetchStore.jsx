import { applyMiddleware, createStore } from "redux"
import fetchReduser from "./FetchReducer"
import thunk from 'redux-thunk';

const fetchStore = createStore(fetchReduser,applyMiddleware(thunk))

export default fetchStore;