import React, { useState } from "react";
import bgVideo from "../assets/babblebg.jpg";
import logo from "../assets/logo.png";
import Inputform from "./Inputform";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [showInput, setShowInput] = useState(false);
  const [showInputOption, setShowInputOption] = useState(true);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const navigator = async () => {
    navigate("/home", { replace: true });
  };

  

  const inputOptions = () => {
    setShowInput(true);
    setShowInputOption(false);
  };

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <img
          src={bgVideo}
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p5 flex justify-center">
            <img src={logo} alt="logo" className="w-1/4" />
          </div>

          {showInputOption && !user ? (
            <div className="shadow-2xl flex-col items-center">
              <button
                className="bg-indigo-600 text-green-400 font-bold bg-opacity-50 flex justify-center items-center p-3 m-5 rounded-lg cursor-pointer outline-none hover:bg-indigo-300 hover:text-pink-500 transition-all"
                onClick={inputOptions}
              >
                Create Account
              </button>
            </div>
          ) : (
            user && (
              <div className="shadow-2xl flex flex-row items-center">
                <button
                  className="bg-indigo-600 text-green-400 font-bold bg-opacity-50 flex justify-center items-center p-3 mt-5 ml-5 mb-5 mr-0 rounded-lg cursor-pointer outline-none hover:bg-indigo-300 hover:text-pink-500 transition-all"
                  onClick={navigator}
                >
                  Continue
                </button>
                <button
                  className="bg-red-300 text-yellow-200 font-bold bg-opacity-50 flex justify-center items-center p-3 m-5 rounded-lg cursor-pointer outline-none hover:bg-indigo-300 hover:text-pink-500 transition-all"
                  onClick={signUserOut}
                >
                  Sign-out
                </button>
              </div>
            )
          )}
          {showInput && <Inputform />}
        </div>
      </div>
    </div>
  );
};

export default Login;
