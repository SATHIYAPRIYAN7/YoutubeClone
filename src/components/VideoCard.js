import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useVideodata from '../hooks/useVideodata';
import { addwatchvideo } from '../Utils/VideoSlice';
import { useNavigate } from 'react-router-dom';
import { addtoggle, removetoggle } from '../Utils/sideslide';
import SingleVideo from './SingleVideo';

function VideoCard() {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const selector1 = useSelector(store => store.slide.toggleMenu)
const selector = useSelector(store=> store?.video?.videoData)


function handlewatch(item){
   dispatch(addwatchvideo(item))
   dispatch(removetoggle())
   navigate(`watch?v=${item.id}`)
   window.scroll(0,0)

}

if (!selector || selector.length === 0) return null;
  return (
    <>
    <div className={`flex pl-4  pt-4 pb-4 ${selector1?"" :"justify-center"}  flex-wrap gap-5` }>
    {
        selector?.items.map((item)=>(
            <div key={item.id} onClick={()=> handlewatch(item)} className={` ${selector1?"w-96" :"w-80"} mt-2 ml-2 mr-4 h-80 hover:scale-105 flex flex-col justify-between `}>
           <SingleVideo item={item}/>
    </div>
        ))
    }
    </div>
    
    </>
  )
}

export default VideoCard