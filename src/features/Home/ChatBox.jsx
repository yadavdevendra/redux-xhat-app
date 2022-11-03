import { Avatar, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { SendMajor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { POST_DATA, SET_CHAT } from "../../redux/action/actiontype";
import { SmileyHappyMajor } from '@shopify/polaris-icons';

const ChatBox = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.chats);
  // console.log("store", state.chats);
  const [setchatText, setChatText] = useState("");
  useEffect(() => {
    const allChats = JSON.parse(localStorage.getItem("chats")) || [];
    dispatch({
      type: SET_CHAT,
      payload: allChats,
    });
  }, [])// eslint-disable-next-line 

  function handleckick(e) {
    e.preventDefault()
    if (user === "" || setchatText === "") return;
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
      <div style={{
        width: 270,
        height: 44,
        border: "1px solid gyey",
        borderRadius: "10px",
        display: "flex",
        backgroundColor: "skyblue",
        textAlign:"center"
      }}>
        <div style={{ width: 444, height: 44, display: "flex" }}>
          <Avatar aria-label={user} />
          <h1 style={{marginTop:"12px", marginLeft: "10px", fontSize: "25px", fontWeight: "bold" }}>{user}</h1>
        </div>
      </div>
      <div className="childchat">
        {state.chats?.map((chat, i) => {
          return (
            <div
              key={i}
              className={`message-box ${chat.user === user ? "message-box-right" : "message-box-left"
                }`}
            >
              <div className="username">{chat.user}</div>
              <div className="message-text">{chat.message}</div>
            </div>
          );
        })}
      </div>

      {/* <form onSubmit={handleckick} className="chattext">
        <TextField
          style={{ color: "red" }}
          type="text"
          value={setchatText}
          onChange={(e) => setChatText(e)}
        />
        <button className="icon">
          <SendMajor />
        </button> 
      </form>*/}
      <form class="conversation-compose" onSubmit={handleckick}>
        <div className="emoji">
          <SmileyHappyMajor color="base" />
        </div>
        <input
          class="input-msg"
          name="input"
          placeholder="Type a message"
          autocomplete="off"
          value={setchatText}
          onChange={(e) => setChatText(e.target.value)}
          autofocus />
        <div class="photo">
          <i class="zmdi zmdi-camera"></i>
        </div>
        <button className="icon">
          <SendMajor />
        </button>
      </form>

    </div>
  );
};

export default ChatBox;
