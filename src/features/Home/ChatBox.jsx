import { Avatar, Badge, Button, Image, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { SendMajor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { POST_DATA,SET_CHAT } from "../../redux/action/actiontype";

const ChatBox = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.chats);
  // console.log("store", state.chats);
  const [setchatText, setChatText] = useState("");
  useEffect(()=>{
    const allChats = JSON.parse(localStorage.getItem("chats")) || [];
    dispatch({
      type: SET_CHAT,
      payload: allChats,
    });
  },[])

  function handleckick(e) {
    e.preventDefault()
    if (user === "" || setchatText==="") return;
    const updatedChats = { user, message: setchatText };
    dispatch({
      type: POST_DATA,
      payload: updatedChats,
    });
    localStorage.setItem("chats", JSON.stringify([...state.chats, updatedChats]));
    setChatText("");
  }
  return (
    <div className="chat">
      <div style={{ width: 24, height: 24, margin: "10px 3px",display:"flex"}}>
        <Avatar aria-label={user}/>
        <h1 style={{marginLeft:"10px",fontSize:"20px",fontWeight:"bold"}}>{user}</h1>
      </div>
      <div className="childchat">
        {state.chats?.map((chat, i) => {
          return (
            <div
              key={i}
              className={`message-box ${
                chat.user === user ? "message-box-right" : "message-box-left"
              }`}
            >
              <div className="username">{chat.user}</div>
              <div className="message-text">{chat.message}</div>
            </div>
          );
        })}
      </div>
     
        <form onSubmit={handleckick} className="chattext">
        <TextField 
          style={{ color: "red" }}
          type="text"
          value={setchatText}
          onChange={(e) => setChatText(e)}
        />
        <button className="icon">
          <SendMajor/>
        </button>
        </form>
    
    </div>
  );
};

export default ChatBox;
