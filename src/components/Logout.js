import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const logout = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <div className="logoutPage">
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
}

export default Logout;
