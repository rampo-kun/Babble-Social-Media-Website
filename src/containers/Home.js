import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";



import Sidebar from "../components/Sidebar";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";






const Home = () => {



  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const navigator = async () => {
    (user === null)&&navigate("/login", { replace: true });
  };

  useEffect(() => {
    navigator()
  });

  return (
    <div className='flex'>
      <Sidebar/>
      <HomePage/>
    </div>
   
  );
};

export default Home;
