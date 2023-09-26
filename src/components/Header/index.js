import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserIcon from "../../assets/icons/user.png";
import axios from "axios";
import "./header.css";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {}, [location]);

  const navigateToLogin = () => {
    navigate("/login");
    window.location.reload(false);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/signout`, {
        withCredentials: true,
      });
      if (response) {
        navigate("/login");
        window.location.reload(false);
      } else {
        navigate("/chat");
        window.location.reload(false);
      }
    } catch (error) {
      console.log("Error while logging in..");
    }
  };

  return (
    <div className="header-container">
      <div className="left">
        <div className="logo">Let's Chat</div>
      </div>
      <div className="right">
        <div className="user">
          {!user ? (
            <div className="login-buttons">
              <div
                className="login-btn btn btn-primary"
                onClick={navigateToLogin}
              >
                {" "}
                Login
              </div>
              <div
                className="login-btn btn btn-danger"
                onClick={navigateToRegister}
              >
                {" "}
                Register
              </div>
            </div>
          ) : (
            <>
              <div className="login-btn btn btn-primary" onClick={handleLogout}>
                {" "}
                Logout
              </div>
              <img src={UserIcon} alt="profile" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
