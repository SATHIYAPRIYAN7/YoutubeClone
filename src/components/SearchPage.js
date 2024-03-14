import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleVideo from './SingleVideo'
import SearchResultVideo from './SearchResultVideo'
import { useNavigate } from 'react-router-dom'
import { addchanneldetails, addwatchvideo } from '../Utils/VideoSlice'
import { removetoggle } from '../Utils/sideslide'

function SearchPage() {

    const selector = useSelector(store=> store.video?.SearchQuery)
    const navigate= useNavigate();
    const dispatch=useDispatch();
    const[result,setresult] = useState([])
    console.log(selector)

    async function serachdata(){
        const response =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${selector}&key=AIzaSyCb3dT6AGbp1T2uBmNonFN4uPC4hOCpdzY`);
        const data =await response.json();
           setresult(data?.items)
           //console.log(data)
    }

    useEffect(()=>{
      serachdata();
    },[selector])
    
  

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
     navigate('/watch?v='+item?.id?.videoId)
     
   }

if(result.length === 0) return null;
    
    
  return (
    <div className='flex max-w-[1200px] m-auto justify-center '>
       <div>
        <p className='ml-4 mt-4'>Showing results for :<span className='text-lg font-semibold'> {selector}</span></p>
        {
            result.map((item)=>{
               return <div key={item.id} onClick={()=> handlewatch(item)} className='flex items-start mt-4 ml-4 w-[90%]' >
           <SearchResultVideo item={item}/>
           </div>
           } )
        
        }
    </div></div>
  )
}

export default SearchPage