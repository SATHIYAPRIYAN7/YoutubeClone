import React from 'react'
import { HiUserCircle } from "react-icons/hi";

function LiveSinglechat({comment}) {
  return (
    <div className='flex gap-2 mx-2 my-3'>
        <HiUserCircle className='text-2xl ' />
         <p className='font-bold'>{comment.username}</p>
          <p>{comment.message}</p>
    </div>
  )
}

export default LiveSinglechat