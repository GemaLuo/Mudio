import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = UserAuth();

  return (
    <div className="flex items-center my-3 md:my-4 p-2 md:p-4">
      <img className="md:ml-6 shadow-xl rounded-full object-cover w-24 h-24 md:w-64 md:h-64" src="https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FJascha-Heifetz.jpg?alt=media&token=2b9092df-9c4e-4673-ab36-a5518fce442e" />
      <div className="md:pl-6">
        <h1 className="text-xl md:text-2xl font-bold py-2">個人檔案</h1>
        {/* 使用者相片在左邊，且可更新，並同步到更新頁面 */}
        <p className="text-lg md:text-xl">信箱： {user && user.email}</p>
        <p className="text-lg md:text-xl">放使用者的名稱</p>
      </div>
    </div>
  );
};

export default Account;
