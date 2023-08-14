import React, { useContext, useState } from "react";
import file from "../img/file.png";
import { AuthContext } from "../context/AuthContextProvider";
import { ChatContext } from "../context/ChatContextProvider";
import { v4 as uuid } from "uuid";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Input = (props) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      try {
        //Create a unique image name
        const storageRef = ref(storage, uuid());

        await uploadBytesResumable(storageRef, img).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  data: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            } catch (err) {
              console.log(err);
            }
          });
        });
      } catch (err) {
        console.log(err);
      }
    } else if(text) {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setImg(null);
    setText("");
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="Message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          name=""
          id="attachFile"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="attachFile">
          <img src={file} alt="" />
        </label>
        <Button size="small" variant="contained" onClick={handleSend} endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Input;
