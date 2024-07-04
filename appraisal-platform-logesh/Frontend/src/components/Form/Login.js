import React, { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const history = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      console.log(codeResponse);
      history("/common");
      
    },
    onError: (error) => console.log("Login Failed: ", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logout = () => {
    googleLogout({});
    setProfile(null);
  };

  return (
    <div className="login-body">
      <div className="login-con">
        <h2 className="items">Login with google</h2>
        <br />
        {profile ? (
          <div>
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <div>
            <button onClick={() => login()} className="btn">Sign in</button>
            {/* {invalidEmail && <h3>Invalid Email</h3>} */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
