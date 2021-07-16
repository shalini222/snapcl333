import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { login } from "./features/appSlice";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login1">
      <div className="login__container">
        <img
          className="login__lol"
          src="https://www.hoedan.nu/wp-content/uploads/2016/12/snapchat_installeren-300x129.png"
          alt=""
        ></img>
        <Button classname="button" variant="outlined" onClick={signIn}>
          Sign In!
        </Button>
      </div>
    </div>
  );
}

export default Login;
