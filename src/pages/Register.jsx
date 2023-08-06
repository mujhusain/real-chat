import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import user from "../img/user.png";
import { auth, storage } from "../firebase";
const Register = (props) => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setErr(false);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">RealChat 💬</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <img src={user} alt="user_avatar" />
            <span>Select Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong!</span>}
        </form>
        <p>If you are already registred! Please Login </p>
      </div>
    </div>
  );
};

export default Register;
