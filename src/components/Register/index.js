import "./register.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    role: 1,
  });

  const handleForm = (value) => {
    return setUserData((data) => {
      return { ...data, ...value };
    });
  };

  const handleRegistration = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `http://localhost:4000/api/register`,
        {
          ...userData,
        },
        { withCredentials: true }
      );
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error while registering.");
    }
  };
  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegistration} className="form-group">
        <div className="segment">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={userData.name}
            placeholder="Enter your name"
            onChange={(e) => handleForm({ name: e.target.value })}
          />
        </div>
        <div className="segment">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={userData.email}
            placeholder="Enter your email"
            onChange={(e) => handleForm({ email: e.target.value })}
          />
        </div>
        <div className="segment">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={userData.password}
            placeholder="Enter your password"
            onChange={(e) => handleForm({ password: e.target.value })}
          />
        </div>

        <div className="segment">
          <label>Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            value={userData.mobileNumber}
            placeholder="Enter your Mobile Number"
            onChange={(e) => handleForm({ mobileNumber: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {" "}
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Register;
