import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[400px] w-full m-auto my-5 p-3">
      <div>
        <h1 className="text-2xl font-bold py-1">註冊</h1>
        <p className="py-2">
          已經有帳號？
          <Link to="/" className="text-sky-500 underline">
            點此登入
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
        <button className="border border-blue-500 bg-blue-500 hover:bg-blue-700 w-full p-4 my-2 text-white font-bold rounded focus:outline-none focus:shadow-outline">
          註冊
        </button>
      </form>
    </div>
  );
};

export default Signup;
