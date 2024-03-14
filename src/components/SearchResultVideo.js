import React from 'react'
import { useNavigate } from 'react-router-dom';

function SearchResultVideo({item}) {

  return (
    
        <>
    <img className=' rounded-xl w-[500px] mb-5' src={item?.snippet?.thumbnails?.medium?.url}/>
    <div className='w-[90%] ml-2 '>
       <p className=' font-bold  text-[15px] '>{item?.snippet?.title}</p>
       <p className='text-[hsl(0,1%,65%)] font-semibold'>{item?.snippet?.channelTitle}</p>
       <p className='text-[hsl(0,1%,65%)] font-semibold'>{} views</p></div>
   </>
   
  )
}

export default SearchResultVideo