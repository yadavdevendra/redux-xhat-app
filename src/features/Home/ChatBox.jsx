import { Avatar, Icon, Image, TextField } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { SendMajor } from "@shopify/polaris-icons";
import { useDispatch, useSelector } from "react-redux";
import { POST_DATA, SET_CHAT } from "../../redux/action/actiontype";
import { SmileyHappyMajor } from '@shopify/polaris-icons';
import { MobileVerticalDotsMajor } from '@shopify/polaris-icons';
import { CameraMajor } from '@shopify/polaris-icons';

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
        backgroundColor: "#128C7E",
        justifyContent: "space-between"
      }}>
        <div tyle={{ margin: "20px" }}>
          <Avatar source="https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS340615.png" />
        </div>

        <div style={{ margin: "10px" }}> {user.slice(0, 8)}
        </div>
        <div style={{ margin: "10px" }}>
          <Icon
            source={MobileVerticalDotsMajor}
            color="subdued"
          />
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
              <div className="username">{chat.user.slice(0, 8)}</div>
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
      <form className="conversation-compose" onSubmit={handleckick}>
        <div className="emoji">
          <Icon
            source={SmileyHappyMajor}
            color="subdued"
          />
        </div>
        {/* <div className="input-msg"> */}
        <input
          className="input-msg"
          type="text"
          placeholder="Type a message"
          value={setchatText}
          onChange={(e) => setChatText(e.target.value)}
        />
        {/* </div> */}
        <div className="photo">
          <Icon
            source={CameraMajor}
            color="subdued"
          />
        </div>
        <button className="icon">
          <Icon
            source={SendMajor}
            color="subdued"
          />
        </button>
      </form>

    </div>
  );
};

export default ChatBox;
