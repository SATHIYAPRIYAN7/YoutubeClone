import React, { useEffect, useState } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { PiVideoCamera } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import {useDispatch, useSelector} from 'react-redux'
import { addtoggle } from '../Utils/sideslide';
import { Link, useNavigate } from 'react-router-dom';
import { addSearchQuery, addsearchsuggestion } from '../Utils/VideoSlice';

function Header() {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const selector =useSelector(store => store.video.SearchSuggestion)
  const [query,setquery] =useState([])

  async function searchSuggestion(){
    const response =await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+query)
    const data = await response.json()
    console.log(data[1]);
    dispatch(addsearchsuggestion(data[1]))
  }

  useEffect(()=>{

    const timer = setTimeout(()=>{
      searchSuggestion()
    },300)
      
    return ()=>{
      clearTimeout(timer)
    }
  },[query])

  function handlemenu(){
    dispatch(addtoggle());
  }


  function handlesearchclick(q){
    dispatch(addSearchQuery(q)) 
    setquery([]);
    navigate("/search")
   
  }


  return (
    <>
    
    <div className='w-[100%]  sticky  top-0 bg-black h-16 z-20 flex shadow-lg items-center justify-between'>
      <div className='flex items-center h-full ml-3 md:ml-6  '>
      <RiMenuFill onClick={handlemenu} className='text-white cursor-pointer text-2xl' />
      <Link to={"/"}> <img className='w-14 lg:hidden text-white' src='https://www.freeiconspng.com/uploads/youtube-logo-png-picture-13.png' alt='logo'/></Link>
      <Link to={"/"}>  <img className='w-36 hidden lg:block text-white' src='https://download.logo.wine/logo/YouTube/YouTube-White-Full-Color-Logo.wine.png' alt='logo'/></Link>
      </div>
      <div className='h-10 flex items-center'>
        <input onChange={(e)=>setquery(e.target.value)}  value={query}  className='w-[12rem] md:w-[20rem] lg:w-[35rem]  pl-4 rounded-l-full h-full bg-transparent border outline-0 border-[hsl(0,0%,18.82%)] text-white' type='text' placeholder='Search'/>
        <button onClick={()=>handlesearchclick(query)} className='text-white rounded-r-full text-xl h-full bg-[hsl(0,0%,18.82%)] px-4'><IoIosSearch /></button>
      </div>
      <div className='text-white flex text-2xl mr-4 md:mr-10 ml-1 md:ml-5 gap-3 lg:gap-10'>
      <a href='https://www.google.com/'><PiVideoCamera /></a>
      <CiBellOn />
      <CgProfile />
      </div>

    </div>

{ selector.length > 0 && <div className='fixed inset-0 -left-8 top-14 w-full flex justify-center z-50 '>
<ul className='w-[540px] h-fit bg-[hsl(0,0%,18.82%)] rounded-lg '>
    {
      selector.map((q)=>{
       return <li onClick={()=>handlesearchclick(q)} className='text-white pl-4 hover:bg-gray-800 text-[17px] py-1 flex items-center gap-3'><IoIosSearch />{q}</li>
      })
    }
   
   </ul></div>}
   
    
    </>
  )
}

export default Header