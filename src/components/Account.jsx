import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  
  const {user, logout}=UserAuth();
  
  const navigate=useNavigate()

  const handleLogout=async()=>{
    try{
      await logout()
      navigate('/')
      console.log('已成功登出')
    }catch(e){
      console.log(e.message)
    }
  }

  return (
    <div className="max-w-[600px] mx-auto my-5 p-4">
      <h1 className="text-2xl font-bold py-2">帳戶</h1>
      <p>使用者信箱： {user && user.email}</p>

      <button onClick={handleLogout} className="border px-6 py-2 my-4">登出</button>
    </div>
  );
};

export default Account;
