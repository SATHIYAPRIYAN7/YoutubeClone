import {configureStore} from "@reduxjs/toolkit"
import sideslide from "./sideslide"
import VideoSlice from "./VideoSlice";
import livechatslice from "./livechatslice";


const youtubestore = configureStore({
    reducer:{
        slide:sideslide,
        video:VideoSlice,
        liveslice:livechatslice,
    }
})

export default youtubestore;