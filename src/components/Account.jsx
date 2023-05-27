import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="flex items-center tablet:mb-5 lg:mt-2 px-2 tablet:px-5">
      <img className="tablet:ml-6 shadow-xl rounded-full object-cover ml-4 w-32 h-32 tablet:w-60 tablet:h-60" src={user.photoURL} />
      <div className="ml-4 tablet:ml-6">
        <h1 className="text-xl md:text-2xl font-bold py-2">個人檔案</h1>
        <p className="text-lg md:text-xl mb-[6px]">信箱： <span className="tracking-wider text-base">{user && user.email}</span></p>
        <p className="text-lg md:text-xl">名稱： <span className="tracking-wider text-base">{user.displayName}</span></p>
      </div>
    </div>
  );
};

export default Account;
