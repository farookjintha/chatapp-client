import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import JoinChat from "./components/JoinChat";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import useFindUser from "./hooks/useFindUser";
import UserContext from "./context/UserContext";

import io from "socket.io-client";
import { useEffect } from "react";
const socket = io.connect("http://localhost:4000");

function App() {
  const navigate = useNavigate();
  const [user, setUser, loading] = useFindUser();

  useEffect(() => {
    if (user) {
      navigate("/chat");
    } else {
      navigate("/login");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div className="App">
        <Header user={user} />
        <div className="main">
          <Routes>
            <Route path="/chat" element={<JoinChat socket={socket} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
