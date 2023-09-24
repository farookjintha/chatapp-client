import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JoinChat from "./components/JoinChat";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

function App() {
  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
