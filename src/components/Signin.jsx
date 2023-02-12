import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signIn} = UserAuth()
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError('')
    try{
      await signIn(email, password)
      navigate('/account')
    } catch(e){
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="max-w-[400px] mx-auto my-5 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2">登入</h1>
        <p className="py-2">
          還沒有帳號？
          <Link to="/signup" className="text-sky-500 underline">
            點此註冊
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">信箱</label>
          <input onChange={(e)=>setEmail(e.target.value)} className="border p-3" type="email" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">密碼</label>
          <input onChange={(e)=>setPassword(e.target.value)} className="border p-3" type="password" />
        </div>
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
          登入
        </button>
      </form>
    </div>
  );
};

export default Signin;
