import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Commentcontainer from './Commentcontainer'

function WatchTitle() {
    const selector =useSelector(store => store.video?.watchVideo)
    const selector1 =useSelector(store => store.video?.channelDetails) 
    const [show,setshow]=useState(false)
    // console.log(selector.snippet.description)
     if(selector1 == null) return null;
     let subcount = selector1?.items[0]?.statistics?.subscriberCount;
     if(subcount.length==7){
       subcount = `${subcount[0]}.${subcount[1]+subcount[2]}M` 
     }else if(subcount.length == 6){
        subcount = `${subcount[0]}${subcount[1]+subcount[2]}K` 
     }else if(subcount.length == 8){
        subcount = `${subcount[0]}${subcount[1]}M` 
     }
  return (
    <>
        <h1 className='text-2xl px-4 font-semibold'>{selector?.snippet?.title}</h1>

        <div className='mt-4 ml-4 flex items-center justify-between'> 
            <div className='flex items-center'>
                <img className='w-12 mr-3 rounded-full' src={selector1?.items[0]?.snippet?.thumbnails?.default.url}/>
                <div className='mr-10'>
                    <h4 className='font-semibold'>{selector1?.items[0]?.snippet?.title}</h4>
                    <p className='text-[12px] text-slate-400'>{subcount} subscribers</p>
                </div>
                <button className='bg-white text-black px-3 rounded-2xl py-1'>Subscribe</button>
            </div>
            <div>
              <p className='pr-16'>Live Chat</p>
            </div>
        </div>

      <div className={`h-fit relative mt-4 ml-4 rounded-lg bg-[hsl(0,0%,18.82%)] overflow-hidden mb-10`}>
  <p className={`${show ? "" : "truncate"} p-5 mb-6`}>{selector.snippet.description}</p>
  <p onClick={() => setshow(!show)} className='absolute cursor-pointer p-1 bg-opacity-65 text-white bottom-0 right-0'>
    {show ? "Show less" : "...more"}
  </p>
</div>

<div className='w-full'>
  <Commentcontainer/>
</div>

    </>
  )
}

export default WatchTitle