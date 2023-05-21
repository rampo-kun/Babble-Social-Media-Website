import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { auth } from "../config/firebase";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {GoGlobe} from 'react-icons/go'
import {HiUserGroup} from 'react-icons/hi'
import {FiSettings} from "react-icons/fi";



const Navbar = () => {
  const signUserOut = async () => {
    await signOut(auth);
    navigate("/login", { replace: true });
  };
  const navigate = useNavigate();
  const opener = () => {
    setOpen(!open);
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0">
      <div className="md:flex py-4 bg-black md:px-10 px-7 items-center justify-between">
        <div className="w-36 m-2 p-2">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          onClick={opener}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <AiFillCloseCircle size={30} color="white" />
          ) : (
            <FiMenu size={30} color="white" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl hover:text-gray-400 text-white transition duration-500 md:my-0 my-7 hover:border-b-2 border-white">
            {/* <Link to="/">Home</Link> */}
            <HiHome className="cursor-pointer" size={30} color="white"/>
          </li>
          <li className="md:ml-8 text-xl hover:text-gray-400 text-white transition duration-500 md:my-0 my-7 hover:border-b-2 border-white">
            {/* <Link to="/">Globe</Link> */}
            <GoGlobe className="cursor-pointer" size={30} color="white"/>
          </li>
          <li className="md:ml-8 text-xl hover:text-gray-400 text-white transition duration-500 md:my-0 my-7 hover:border-b-2 border-white">
            {/* <Link to="/">Rooms</Link> */}
            <HiUserGroup className="cursor-pointer" size={30} color="white"/>
          </li>
          <li className="md:ml-8 text-xl hover:text-gray-400 text-white transition duration-500 md:my-0 my-7 hover:border-b-2 border-white">
            {/* <Link to="/">Home</Link> */}
            <FiSettings className="cursor-pointer" size={30} color="white"/>
          </li>
          <button
            className="md:hidden bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 duration-500 md:ml-8"
            onClick={signUserOut}
          >
            Sign Out
          </button>
        </ul>
        <div className="hidden md:flex items-center space-x-3 text-white">
          <span>{auth?.currentUser?.displayName}</span>
          <img
            className="w-10 h-10 rounded-full"
            src={auth?.currentUser?.photoURL}
            alt="user"
          />
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 duration-500 md:ml-8"
            onClick={signUserOut}
          >
            Sign Out
          </button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Navbar;
