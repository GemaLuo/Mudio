import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="flex items-center my-3 md:my-4 p-2 md:p-4">
      <img className="md:ml-6 shadow-xl rounded-full object-cover w-24 h-24 md:w-64 md:h-64" src={user.photoURL} />
      <div className="md:pl-6">
        <h1 className="text-xl md:text-2xl font-bold py-2">個人檔案</h1>
        <p className="text-lg md:text-xl pb-2">信箱： <span className="tracking-wider">{user && user.email}</span></p>
        <p className="text-lg md:text-xl">名稱： <span className="tracking-wider">{user.displayName}</span></p>
      </div>
    </div>
  );
};

export default Account;
