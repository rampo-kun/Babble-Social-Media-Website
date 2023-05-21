import React from "react";
import logo from "../assets/logo.png";
import Chatroom from "../containers/Chatroom";
import { Link } from "react-router-dom";

const Globeroom = () => {
  const roomName = "Globe";

  return (
    <div className="p-7 h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white flex flex-col items-center">
      <Link to="/home">
        <img src={logo} alt="logo" className="w-24" />
      </Link>
      <Chatroom room={roomName} />
    </div>
  );
};

export default Globeroom;
