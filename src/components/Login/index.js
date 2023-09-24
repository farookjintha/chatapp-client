import "./login.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleCred = (value) => {
    return setCredentials((cred) => {
      return { ...cred, ...value };
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/login`,
        {
          ...credentials,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log("Error while logging in..");
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="form-group">
        <div className="segment">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            placeholder="Enter your email"
            onChange={(e) => handleCred({ email: e.target.value })}
          />
        </div>
        <div className="segment">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            id="password"
            placeholder="Enter your password"
            onChange={(e) => handleCred({ password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          Login
        </button>
      </form>
      <div>
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
