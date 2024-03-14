import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleVideo from './SingleVideo';
import SearchVideo from './SearchVideo';
import { addchanneldetails, addwatchvideo } from '../Utils/VideoSlice';
import { removetoggle } from '../Utils/sideslide';
import { Navigate, useNavigate } from 'react-router-dom';
import useChannel from '../hooks/useChannel';

function WatchSideVideo() {
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const selector = useSelector(store=> store?.video?.videoData)
    if (!selector || selector.length === 0) return null;

   async function handlewatch(item){
        dispatch(addwatchvideo(item))
        dispatch(removetoggle())
        
       async function getData(){
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item?.snippet?.channelId}&key=AIzaSyCb3dT6AGbp1T2uBmNonFN4uPC4hOCpdzY`);
        const data = await response.json();
        dispatch(addchanneldetails(data));
        console.log(data?.items[0])
      }
      getData();
      window.scroll(0,0)
      navigate('/watch?v='+item?.id)
      
    }
  return (
    <>
    <div className='mt-5'>
     {
        selector?.items.map((item)=>(
            <div key={item.id} onClick={()=> handlewatch(item)} className={` w-80 mt-2 ml-2 mr-4  h-32 hover:scale-105 flex  justify-between `}>
           <SearchVideo item={item}/>
    </div>
        ))
    }</div>
    </>
  )
}

export default WatchSideVideo