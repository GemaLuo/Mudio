import React from "react";
import { Link } from "react-router-dom";
const Dropbox = () => {
  return (
    <div className="px-2 py-2 z-50 shadow-xl shadow-black/50 absolute top-[4.5rem] right-[1.1rem] bg-neutral-900 rounded-lg w-36 h-20">
      <Link to="/account">
        <p className="px-1 py-1 hover:bg-zinc-600 rounded-lg">個人檔案</p>
      </Link>
      <p className="px-1 py-1 hover:bg-zinc-600 rounded-lg">登出</p>
    </div>
  );
};

export default Dropbox;
