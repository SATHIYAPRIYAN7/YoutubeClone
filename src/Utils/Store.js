import {configureStore} from "@reduxjs/toolkit"
import sideslide from "./sideslide"
import VideoSlice from "./VideoSlice";


const youtubestore = configureStore({
    reducer:{
        slide:sideslide,
        video:VideoSlice,
    }
})

export default youtubestore;