import { createSlice } from "@reduxjs/toolkit";


const VideoSlice = createSlice({
    name : "video",
    initialState:{
        videoData : [],
        watchVideo: null,
        channelDetails:null,
        SearchSuggestion:[],
        SearchQuery:null,
    },
    reducers:{
        addvideoData : (state,action)=>{
            state.videoData=action.payload;
        },
        addwatchvideo:(state,action)=>{
            state.watchVideo=action.payload;
        },
        addchanneldetails:(state,action)=>{
            state.channelDetails=action.payload;
        },
        addsearchsuggestion:(state,action)=>{
            state.SearchSuggestion=action.payload
        },
        addSearchQuery :(state,action)=>{
            state.SearchQuery = action.payload     
           }
    }
})

export const{addvideoData,addwatchvideo,addSearchQuery,addchanneldetails,addsearchsuggestion} = VideoSlice.actions
export default VideoSlice.reducer;