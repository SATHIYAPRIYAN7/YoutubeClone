import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { PiUserRectangle } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { RiFolderVideoLine } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
function Sidebar() {
const selector = useSelector(store => store.slide.toggleMenu)

const [hovereffect,sethovereffect] = useState("Home")

    const section1 =[
        {
        icon:<IoMdHome />,
        name:"Home"
        },
        {
            icon:<SiYoutubeshorts />,
            name:"Shorts"
        },
        {
            icon:<MdOutlineSubscriptions />,
            name:"Subcriptions"
        }
    ]
    const section2 =[
        {
        icon:<PiUserRectangle />,
        name:"Your channel"
        },
        {
            icon:<MdHistory />,
            name:"History"
        },
        {
            icon:<RiFolderVideoLine />,
            name:"Your videos"
        },
        {
            icon:<MdOutlineWatchLater />,
            name:"Watch later"
        }
    ]
    
    const subscriptions=["RoadsideCoder"," Web Dev Simplified"," Gaurav Thakur"," Tezla Creations",'Rv Tech Tamil',' Fact Force','Shafi Zone Shorts','Multi Facts in Tamil','Its Fact','Ridddle','Canine Empire']
  return (
    <>
    { selector && <div className='text-white sticky top-16 overflow-hidden hover:overflow-y-scroll z-10  h-screen bg-black  w-[15%] px-1 pb-6 mr-3'>

        { section1.map((item)=>(
            <div key={item.name} onClick={()=> sethovereffect(item.name)} className={`flex items-center my-3 gap-3 cursor-pointer mx-2 hover:bg-[hsl(0,0%,18.82%)] ${hovereffect === item.name ? "bg-[hsl(0,0%,18.82%)]": ""} rounded-lg pl-2 `}>
            <div className='text-2xl my-2'>{item.icon}</div>
            <p className='hidden lg:block'>{item.name}</p>
        </div>
        ))  }

        <hr className='text-gray-600 border border-[hsl(0,0%,18.82%)]' />
        <h1 className='ml-5 mt-2 font-bold'>You ></h1>
        { section2.map((item)=>(
            <div key={item.name} onClick={()=> sethovereffect(item.name)} className={`flex items-center cursor-pointer my-3 gap-3 mx-2 hover:bg-[hsl(0,0%,18.82%)] ${hovereffect === item.name ? "bg-[hsl(0,0%,18.82%)]": ""} rounded-lg pl-2 `}>
            <div className='text-2xl my-2'>{item.icon}</div>
            <p className='hidden lg:block'>{item.name}</p>
        </div>
        ))  }
        <hr className='text-gray-600 border border-[hsl(0,0%,18.82%)]' />
        <h1 className='ml-5 mt-2 font-bold'>Subcriptions</h1>
        { subscriptions.map((item)=>(
            <div key={item} className='flex items-center my-1 gap-3 mx-2 hover:bg-[hsl(0,0%,18.82%)] hover:rounded-lg pl-2 '>
            <div className='text-2xl my-2'><CgProfile/></div>
            <p className='hidden lg:block'>{item}</p>
        </div>
        ))  }

    </div> }</>
  )
}

export default Sidebar