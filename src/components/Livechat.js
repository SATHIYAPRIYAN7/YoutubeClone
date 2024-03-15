import React, { useEffect, useRef } from 'react'
import LiveSinglechat from './LiveSinglechat'
import { useDispatch, useSelector } from 'react-redux'
import { comments, nameList } from '../helper/helper';
import { addliveslice } from '../Utils/livechatslice';

function Livechat() {
    const dispatch =useDispatch();
    const selector = useSelector(store => store.liveslice)
   
    console.log(selector)
    const chatref=useRef(null)
     
    useEffect(()=>{
      

       const i= setInterval(()=>{
           const generatename = ()=> {
               let finalname = nameList[Math.floor(Math.random() * nameList.length)]; 
                   return finalname;   
                    };
                    const generatemessage = ()=> {
                        let finalcomment= comments[Math.floor(Math.random() * comments.length)];    
                         return finalcomment  
                    };
              dispatch(addliveslice({
                username : generatename(),
                message : generatemessage()
              }))

        },2000)

        return ()=>{
            clearInterval(i)
        }


    },[])

   function handleclick(){
    if(chatref !== null){
        dispatch(addliveslice({
        username:"You",
        message: chatref.current.value
    }))
    }
    
   }

  return (
    <div className=' w-fit m-auto flex flex-col border-zinc-900 mb-10 rounded-lg bg-zinc-900 max-h-[400px]  border justify-between'>
    <div className=' h-96 overflow-y-scroll flex flex-col justify-between '>
        <h1 className='mx-3 my-1 font-semibold'>Live Chat</h1>
        <div className='flex flex-col-reverse'>

            {
                selector.length>0 && selector.map((comment)=>{
                    return <LiveSinglechat comment={comment}/>
                })
            }
           
        </div>
    </div>
    <div className='flex '>
        <input ref={chatref} className='w-[600px] border bg-transparent py-2 px-2 border-white' type="text" placeholder='chat here'/>
        <button onClick={handleclick} className='bg-white px-3 text-black'>send</button>
    </div>
    </div>
  )
}

export default Livechat