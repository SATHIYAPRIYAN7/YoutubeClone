import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { Youtube_Api } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addvideoData } from '../Utils/VideoSlice';
import Header from './Header';


function Body() {
  
  return (
    <>
    <Header />
    <div className='bg-black flex text-white min-h-screen w-[100%]'>
      <Sidebar/>
       <Outlet/>
       
    </div></>
  )
}

export default Body