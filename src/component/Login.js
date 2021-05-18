import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ updateName, updateAuthorisation }) => {
  const [pw, setPw] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(pw);
    if (pw === "Admin246") {
      console.log(pw);
      updateAuthorisation(true);
      history.push("/S11-pe_reactJS/dashboard");
    }
    setPw("");
  };

  return (
    <section>
      <div className="login">
        <form onSubmit={onSubmit}>
          <div className="login-form">
            <h3>Administrator Login</h3>
            <div className="login-details">
              <label>Username: </label>
              <input
                type="text"
                placeholder="Username"
                onInput={(e) => updateName(e.target.value)}
              />
              <label>Password: </label>
              <input
                type="password"
                placeholder="Password"
                value={pw}
                onInput={(e) => setPw(e.target.value)}
              />
            </div>
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
