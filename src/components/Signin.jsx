import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[400px] mx-auto my-5 p-3">
      <div>
        <h1 className="text-2xl font-bold py-1">登入</h1>
        <p className="py-2">
          還沒有帳號？
          <Link to="/signup" className="text-sky-500 underline">
            點此註冊
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-col py-2 mb-2">
          <label className="py-1 font-bold block text-gray-700 font-fold">
            信箱
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2 mb-2">
          <label className="py-1 font-bold block text-gray-700 font-fold">
            密碼
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
          />
        </div>
        <button className="border border-blue-500 bg-blue-500 hover:bg-blue-700 w-full p-3 mb-2 mt-3 text-white font-bold rounded focus:outline-none focus:shadow-outline">
          登入
        </button>
      </form>
    </div>
  );
};

export default Signin;
