import React from 'react'
import Breadbutton from './Breadbutton'
import VideoCard from './VideoCard'
import useVideodata from '../hooks/useVideodata'
import { useSelector } from 'react-redux'

function VideoContainer() {
  const selector = useSelector(store => store.slide.toggleMenu)
  useVideodata();
  return (
    <div className={selector?`w-[85%]`:'w-[100%]'}>
      <Breadbutton/>
      <div>
        <VideoCard/>
      </div>
    </div>
  )
}

export default VideoContainer