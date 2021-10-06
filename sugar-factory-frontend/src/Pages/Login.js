import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../images/couple2.png";
import loglogin from "../images/Loglogin.png";

import api from "../Service/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleLogin(event) {
    event.preventDefault();
    const login = {
      email: email,
      password: password,
    };
    api
      .checkLogin(login, {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.user.user_type_id === 1) {
          localStorage.setItem("access_token", response.data.access_token);
          history.replace("/users");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        if (email === "" || password === "") {
          setErrors(error.response.data.errors);
        } else {
          alert("incorrect username or password");
        }
      });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 login-section-wrapper">
          <div className="brand-wrapper">
            <img src={loglogin} alt="logo" className="logo" />
          </div>
          <div className="login-wrapper my-auto">
            <h1 className="login-title">Log in</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your passsword"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <input
                name="login"
                id="login"
                className="btn btn-block login-btn"
                type="submit"
                defaultValue="Login"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-6 px-0 d-none d-sm-block">
          <img src={img} alt="login image" className="login-img" />
        </div>
      </div>
    </div>
  );
}
// function Login(){
//     return (
//         <div>
//             <h1 className ={loginclass.head1}>Header</h1>
//         </div>
//     )
// }

export default Login;
