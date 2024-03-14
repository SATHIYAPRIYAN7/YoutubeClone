import React from 'react'
import { useSelector } from 'react-redux'
import WatchTitle from './WatchTitle'
import useChannel from '../hooks/useChannel'
import WatchSideVideo from './WatchSideVideo'
import { useSearchParams } from 'react-router-dom'

function WatchPage() {

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  console.log(videoId)
  const selector =useSelector(store => store.video?.watchVideo)
  // if(!selector || selector.length === 0) return null;
   useChannel(selector?.snippet?.channelId)
  return (
    <div className='w-screen overflow-hidden '><iframe className='w-full' width="560" height="540" src={`https://www.youtube-nocookie.com/embed/${videoId}?si=O7OH_hnIrPLN1bbe`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    <div className='flex gap-3s'>
           <div className='w-[60%] mt-3'>
                   <WatchTitle/>
           </div>

           <div>
              <WatchSideVideo/>
           </div>

    </div>
    </div>
  )
}

export default WatchPage