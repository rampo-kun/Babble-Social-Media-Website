import React from "react";
import { BsPen } from "react-icons/bs";
import { useState } from "react";

import Chatroom from "../containers/Chatroom";


const CardName = () => {
    
  const [roomName, setRoomName] = useState("");
  const [displayer, setDisplayer] = useState(false)

  const roomNameChanger = () => {
    console.log(roomName)
    setDisplayer(true)
  };

  return (
    <div className="flex flex-col items-center">
        {displayer?<Chatroom/>:(<><div
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
        <div className="flex justify-center">
          <button onClick={roomNameChanger}
            className="bg-green-500 text-white mt-4 px-4
        py-2 rounded-md hover:bg-green-600 duration-500"
          >
            Enter name
          </button>
        </div>
        </>)}
    </div>
  );
};

export default CardName;
