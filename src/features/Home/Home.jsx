import { Select } from "@shopify/polaris";
import React, { useCallback, useMemo } from "react";
import { useEffect, useState } from "react";
import { Modal, TextContainer, TextField } from "@shopify/polaris";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA } from "../../redux/action/actiontype";

function Home() {
  const options = [{ label: "Add User", value: "AddUser" }];
  const [text, setText] = useState("");
  const [adduser, setAddUser] = useState(options);
  const [selected, setSelected] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
 
  useEffect(() => {
    const parsevalue = JSON.parse(localStorage.getItem("option"));
    if (parsevalue) {
      dispatch({ type: SET_DATA, payload: parsevalue });
      setAddUser(parsevalue);
      return;
    }
    setAddUser(options);
  }, []);

  const handleSelectChange = (value) => {
    if (value === "AddUser") {
      setActive(true);
    } else {
      setActive(false);
    }
    setSelected(value);
  };

  function handleChange() {
    const newoption = [...adduser, { label: text, value: text }];
    setAddUser(newoption);
    localStorage.setItem("option", JSON.stringify(newoption));
    setActive(false);
    setText("");
    setSelected("");
  }

  return (
    <>
    <div className="selectoption">
      <Select
        label="Chat Apllication"
        placeholder="Select"
        options={adduser}
        onChange={(e) => handleSelectChange(e)}
        value={selected}
      />
      </div>
      <div>
        <Modal
          open={active}
          onClose={() => {
            setSelected("");
            setActive(false);
          }}
          title="Reach more shoppers with Instagram product tags"
          primaryAction={{
            content: "Add User",
            onAction: handleChange,
          }}
        >
          <Modal.Section>
            <TextContainer>
              <TextField
                type="text"
                onChange={(e) => setText(e)}
                value={text}
              />
            </TextContainer>
          </Modal.Section>
        </Modal>
        {adduser.length === 3 && (
          <h1
            style={{
              width: "100wh",
              height:"100vh",
            }}
          >
            {selected !== "AddUser" && <ChatBox user={selected}/>}
          </h1>
        )}
      </div>
    </>
  );
}
export default Home;