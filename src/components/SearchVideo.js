import React from 'react'

function SearchVideo({item}) {

    let views =item?.statistics?.viewCount;
  
    if(views.length==7){
        views = `${views[0]}.${views[1]+views[2]}M` 
      }else if(views.length == 6){
        views = `${views[0]}${views[1]+views[2]}K` 
      }else if(views.length == 8){
        views = `${views[0]}${views[1]}M` 
      }
  return (
    <>
    <img className=' rounded-xl mb-2' src={item?.snippet?.thumbnails?.medium?.url}/>
    <div className='w-[90%] ml-2 '>
       <p className=' font-bold truncate text-[15px] '>{item?.snippet?.title}</p>
       <p className='text-[hsl(0,1%,65%)] font-semibold'>{item?.snippet?.channelTitle}</p>
       <p className='text-[hsl(0,1%,65%)] font-semibold'>{views} views</p></div>
   </>
  )
}

export default SearchVideo