import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import RoomPage from "../components/RoomPage";

const Room = () => {
    
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const navigator = async () => {
    user === null && navigate("/login", { replace: true });
  };

  useEffect(() => {
    navigator();
  });

  return (
    <div className="flex">
      <Sidebar />
      <RoomPage />
    </div>
  );
};

export default Room;
