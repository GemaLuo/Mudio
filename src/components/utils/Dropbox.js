import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Dropbox = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="px-2 py-2 z-50 shadow-xl shadow-black/50 absolute top-[4.5rem] right-[1.1rem] bg-neutral-900 rounded-lg w-36 h-20">
      <Link to="/account">
        <p className="px-1 py-1 hover:bg-zinc-600 rounded-lg">個人檔案</p>
      </Link>
      <p>
        <button onClick={handleLogout} className="px-1 py-1 w-32 text-left hover:bg-zinc-600 rounded-lg">登出</button>
      </p>
    </div>
  );
};

export default Dropbox;
