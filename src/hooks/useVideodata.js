import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addvideoData } from "../Utils/VideoSlice";
import { Youtube_Api } from "../Utils/Constants";


function useVideodata(){
    const dispatch =useDispatch()
  async function getData(){
    const response = await fetch(Youtube_Api);
    const data = await response.json();
    dispatch(addvideoData(data));
   // console.log(data)
  }

  useEffect(()=>{
      getData();
  },[])
}

export default useVideodata