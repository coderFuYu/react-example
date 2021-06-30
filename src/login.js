import React, { useEffect, useState } from "react";
import "./login.css";

function Login(props) {
  useEffect(() => {
    let localStorage = window.localStorage;
    if (localStorage.islogin === "1") {
      props.history.replace("/home");
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h2>欢迎来到XXX博客区</h2>
      <form className="form">
        <div className="formItem">
          <label htmlFor="username">用户名：</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label htmlFor="password">密码：</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginBtn" onClick={() => handleLogin()}>
          登录
        </div>
      </form>
    </div>
  );

  function handleLogin() {
    if (username && password) {
      props.history.replace("/home");
      window.localStorage.islogin = "1";
      alert("欢迎！");
    } else {
      alert("请输入用户名和密码！");
    }
  }
}

export default Login;
