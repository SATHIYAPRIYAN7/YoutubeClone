import React from 'react'

function Breadbutton() {

  const list=["All","TelevisionComedy","TamilCinema","Music","Mixes","MrBean","Gaming", "Telivison","Javascript","Scifi","Live","Mysteries","Python","News","Dogs","RecentlyUploaded","Watched","Newtoyou"]

  return (
    <div className='w-full px-4 scrollbar-hide overflow-x-scroll '>
       <div className='flex  gap-4 items-center'> 
       {
            
            list.map((item)=>(
<p key={item} className='bg-[hsl(0,0%,18.82%)] px-3 py-1 rounded-lg w-fit'>{item}</p>
            ))
        }</div>
        
    </div>
  )
}

export default Breadbutton