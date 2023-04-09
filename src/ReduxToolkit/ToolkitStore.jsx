import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import PostSlice from "../Components/ExtraReducer/PostSlice";

const Tstore = configureStore({
    reducer:{
        counter: CounterSlice,
        post: PostSlice
    }

})

export default Tstore;