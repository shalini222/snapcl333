import React, { useEffect } from "react";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useSelector } from "react-redux";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="https://www.hoedan.nu/wp-content/uploads/2016/12/snapchat_installeren-300x129.png"
              alt=""
            />
            <div className="app__body">
              <div className="app___bodybackground">
                <Switch>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
