import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function SingleComment({coms,comments,setcomments}) {
    const [isactive1,setisactive1]=useState("")
    const [reply,setreply]=useState(false)
    const [showreply,setshowreply]=useState(false)

    function handleclick(e){
        const replied = comments.find((item)=> item.id === e)
        replied.replies=[...replied.replies,{
            username:"replieduser",
            id:comments.length+1,
            message:isactive1,
        }]
        console.log(replied)
        console.log(comments)
        setcomments([...comments])
        setisactive1("")
        setshowreply(true)
    }
  return (
    <div>
        <div className='flex items-start gap-2 mb-2'>
       <HiUserCircle className='text-4xl ' />
        <div>
            <p className='font-bold'>Username</p>
            <p>{coms.message}</p>
            <button className='font-bold hover:bg-gray-800 px-2 py-1 text-sm rounded-2xl mt-1' onClick={()=>setreply(true)}>Reply</button>
        </div>
        
        </div> {
reply && <div className='w-[50%]'>
<input value={isactive1} onChange={(e)=> setisactive1(e.target.value) }  className='w-full mb-2 bg-transparent outline-none focus:border-white border-b-2 pl-3 pr-36 mx-6 border-gray-500' type="text" placeholder='Add a comment' /> 
 <div className='text-right'>
   <button onClick={()=> setreply(false)} className='font-semibold'>Cancel</button>
   <button onClick={()=> handleclick(coms.id)} disabled={!isactive1.length > 0} className='ml-2 bg-blue-500 disabled:bg-gray-600 rounded-2xl font-semibold px-2 py-1  text-black'>Comment</button>
</div>
</div>
        }

     <div className={`ml-16 ${showreply?"":"hidden"}`}>
        {
        
            coms.replies.map((rep)=>{
                return <div className='flex items-start gap-2 mb-2'>
                <HiUserCircle className='text-4xl ' />
                 <div>
                     <p className='font-bold'>repliedUser</p>
                     <p>{rep.message}</p>
                     
                 </div>
                 
                 </div>
            })
        }</div>

        {
          coms.replies.length>0 &&  <p onClick={()=> setshowreply(!showreply)} className='ml-10 text-sm mb-2 flex items-center gap-1 text-blue-500 w-fit px-2 rounded-2xl cursor-pointer py-1 hover:bg-blue-950'>{!showreply?<IoMdArrowDropdown className='text-lg' />:<IoMdArrowDropup className='text-lg' />}{coms.replies.length+ " replies"}</p>}
          <hr className='opacity-25'/>
    </div>
  )
}

export default SingleComment