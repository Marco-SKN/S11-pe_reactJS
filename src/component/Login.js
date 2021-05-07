import React from "react";

const Login = () => {
  return (
    <section>
      <div className="login">
        <form action="#">
          <div className="login-form">
            <div className="login-details">
              <label>Username: </label>
              <input type="text" placeholder="Username" />
              <label>Password: </label>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">LOGIN</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
