import React from 'react'
import writer from '../assets/602985-removebg-preview.png'
import { BsPen } from "react-icons/bs";
import { useState } from "react";
import Chatroom from "../containers/Chatroom";


const RoomPage = () => {


  const [roomName, setRoomName] = useState("");
  const [displayer, setDisplayer] = useState(false)


  const roomNameChanger = () => {
    console.log(roomName)
    setDisplayer(true)
  };

  return (
    <div className='p-7  h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white flex flex-col items-center'>
    {displayer?<Chatroom room={roomName}/>:(<div className='p-7 h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white flex flex-col items-center'>
        <div className='flex justify-center'>
        <h1 className='title1 text-2xl my-5 font-semibold mb-10'>{displayer?`welcome to ${roomName}`:"Name your room"}</h1>
        </div>
        <div className='flex items-center justify-center'>
        <div className="flex flex-col space-y-6 justify-center items-center">
        {(<>
        <div>
        <div
          className={`flex items-center rounded-md bg-[#ffffff2e] mt-6 px-4
        py-2`}
        >
          <BsPen
            className={`text-white text-lg block float-left cursor-pointer mr-2`}
          />
          <input
          onChange={(e)=>{setRoomName(e.target.value)}}
            type="text"
            placeholder="name..."
            className={`text-base bg-transparent w-full text-white focus:outline-none border-none placeholder-white`}
          />
        </div>
        <div className="flex justify-center items-center">
          <button onClick={roomNameChanger}
            className="bg-green-500 text-white mt-4 px-4
        py-2 rounded-md hover:bg-green-600 duration-500"
          >
            Enter name
          </button>
        </div>
        </div>
        <img src={writer} alt='alt' className='md:flex hidden image drop-shadow-lg' />
        </>)}
    </div>        
        </div>
    </div>)}
    </div>
  )
}

export default RoomPage
