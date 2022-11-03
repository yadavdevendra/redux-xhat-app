
.App {
  text-align: center;
  width: 100vw;
  background-repeat: no-repeat;
  background-size:cover;
  background-image: url('https://c0.wallpaperflare.com/preview/578/536/60/internet-whatsapp-smartphone-communication.jpg');
}
.selectoption {
  width: 275px;
  margin-left: 90px;
  margin-inline: auto;
}
.chat {
  background-image: url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg");
  margin-top: 10px;
  border: 5px solid grey;
  border-radius: 15px;
  width: 280px;
  text-align: center;
  margin-inline: auto;
  background-color:whitesmoke;
}
.childchat::-webkit-scrollbar{
  display: none;
}
.childchat {
  overflow-y: auto;
  height: 400px;
}
.message-text {
  width: 100px;
  word-break: break-all;
}
.messages-card {
  display: flex;
  flex-direction: column;
}

.message-box {
  display: flex;
  align-items: flex-end;
}

.message-box .username {
  font-size: 0.7rem;
  padding: 2px 5px;
  color: grey;
}

.message-box .message {
  width: fit-content;
  margin-bottom: 8px;
  padding: 0.4rem 0.8rem;
  background: rgb(255, 255, 255);
}

.message-box .message .message-text {
  font-size: 0.9rem;
  
}
.message-box-left {
  margin-right: 7rem;
  height: max-content;
  border-radius: 10px 0px 10px 10px;
  border: 2px solid rgb(107, 103, 103);
  background-color: white;
  color: black;
  font-size: small;
  margin-top: 10px;
}

.message-box-right {
  flex-direction: row-reverse;
  margin-left: 7rem;
  border-radius: 0px 10px 10px 10px;
  border: 2px solid rgb(81, 175, 230);
  background-color: #25D366;
  margin-top: 10px;
  font-size: small;
}
.icon {
  margin-top: 40px;
  height: 50px;
  width: 70px;

}
/* .chattext {
  display: flex;
  width: 800px;
  border-radius: 10px 0px 10px 10px;
  
} */

/* chat box */
.conversation-compose {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  overflow: hidden;
  height: 50px;
  width: 100%;
  z-index: 2;
}

.conversation-compose div,
.conversation-compose input {
  background: #fff;
  height: 85%;
}

.conversation-compose .emoji {
  display: flex;
  margin-left: 8px;
  width: 48px;
}

.conversation-compose .input-msg {
  margin-top: -10px;
  border: 0;
  flex: 1 1 auto;
  font-size: 16px;
  outline: none;
  min-width: 50px;
}

.conversation-compose .photo {
  flex: 0 0 auto;
  border-radius: 0 0 5px 0;
  text-align: center;
  position: relative;
  width: 48px;
}

.conversation-compose .photo:after {
  border-width: 0px 0 10px 10px;
  border-color: transparent transparent transparent #fff;
  border-style: solid;
  position: absolute;
  width: 0;
  height: 0;
  content: "";
  top: 0;
  right: -10px;
}



/* Small Screens

@media (max-width: 768px) {
  .marvel-device.nexus5 {
    border-radius: 0;
    flex: none;
    padding: 0;
    max-width: none;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

  .marvel-device > .screen .chat {
    visibility: visible;
  }

  .marvel-device {
    visibility: hidden;
  }

  .marvel-device .status-bar {
    display: none;
  }

  .screen-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .conversation {
    height: calc(100vh - 55px);
  }
  .conversation .conversation-container {
    height: calc(100vh - 120px);
  }
} */
