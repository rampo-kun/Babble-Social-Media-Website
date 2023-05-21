import React, { useState, useEffect, useRef } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

const Chatroom = ({ room }) => {
  const bottomRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });

    

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    
    bottomRef.current?.scrollIntoView({behavior: 'smooth'})

    setNewMessage("");
  };

  return (
    <div className={`flex items-center flex-col h-full space-y-8 ${room=='Globe'&& 'pb-4'}`}>
      <div className="title2 text-2xl">
        <h1>{room!=='Globe'&&`Welcome to ${room}`}</h1>
      </div>
      <div className="chat bg-transparent flex w-880 max-h-screen overflow-auto hide-scrollbar justify-center">
        <div className="w-1/2 md:w-full mx-2 my-2 space-y-3 py-3 px-3 over">
          {messages.map((message) => {
            return (
              <div className="flex border rounded-md p-5 bg-[#ffffff2e]" key={message.id}>
                <h1 className="font-bold mr-2 block">{message.user} :</h1>
                {message.text}
              </div>
            );
          })}
          <div ref={bottomRef}></div>
        </div>
      </div>
      <div className="flex">
        <form className="flex mx-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your message..."
            className={`text-base bg-transparent w-[762px] text-white focus:outline-none border-none placeholder-white`}
            onChange={(e) => {
              setNewMessage(e.target.value);
            }}
            value={newMessage}
          />
          <button
            type="submit"
            className="bg-green-500 text-white mt-4 px-4
        py-2 rounded-md hover:bg-green-600 duration-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatroom;
