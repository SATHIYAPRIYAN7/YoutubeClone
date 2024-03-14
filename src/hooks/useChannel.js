import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addchanneldetails, addvideoData } from "../Utils/VideoSlice";
import { Youtube_Api } from "../Utils/Constants";


function useChannel(id){
    const dispatch =useDispatch()
  async function getData(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCb3dT6AGbp1T2uBmNonFN4uPC4hOCpdzY`);
    const data = await response.json();
    dispatch(addchanneldetails(data));
    console.log(data?.items[0])
  }

  useEffect(()=>{
      getData();
  },[])
}

export default useChannel