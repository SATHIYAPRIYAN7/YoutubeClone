import React, { useState } from 'react'
import SingleComment from './SingleComment';

function Commentcontainer() {

    const[comments,setcomments]=useState([]) 
    const [isactive,setisactive]=useState(false)
    const [isactive1,setisactive1]=useState("")

    function handlechange(e){
        setisactive1(e);
        
    }
    function handleclick(){
         setcomments([...comments,{
            username:"user1",
            id:comments.length+1,
            message:isactive1,
            replies:[] 
         }])
         setisactive1("")
    }
    
  return (
    <div >
        <h1 className='text-xl font-bold pl-5 pb-4'>{comments.length} Comments</h1>
        <div className='w-[850px] '>
         <input onFocus={()=> setisactive(true)} value={isactive1} onChange={(e)=> handlechange(e.target.value) }  className='w-full mb-2 bg-transparent outline-none focus:border-white border-b-2 pl-3 pr-36 mx-6 border-gray-500' type="text" placeholder='Add a comment' /> 
        { isactive && <div className='text-right'>
            <button onClick={()=> setisactive(false)} className='font-semibold'>Cancel</button>
            <button onClick={handleclick} disabled={!isactive1.length > 0} className='ml-2 bg-blue-500 disabled:bg-gray-600 rounded-2xl font-semibold px-3 py-2  text-black'>Comment</button>
         </div>}
        </div>


        <div className='pl-5 mt-5'>
            {
              comments.length>0 ?
              comments.map((coms)=>{
               return <SingleComment comments={comments} setcomments={setcomments} key={coms.id} coms={coms}/>
              })  : <p className='text-center font-bold text-lg'>No comments yet</p>

            }
            
        </div>


       
    </div>
  )
}

export default Commentcontainer