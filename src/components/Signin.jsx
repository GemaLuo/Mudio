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
    <div className="h-screen w-screen flex items-center justify-center overflow-auto bg-neutral-800 p-5">
      <div className="max-w-[340px] md:max-w-[380px] lg:max-w-[400px] w-full mb-5 p-3">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-center text-green-500 text-5xl font-extrabold pt-1 pb-3">
            Mudio
          </h1>
          <h1 className="text-center  text-2xl font-bold pt-1 pb-3">登入</h1>
          <div className="flex flex-col py-2 mb-2">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="信箱"
            />
          </div>
          <div className="flex flex-col py-2 mb-2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="密碼"
            />
          </div>
          <button className="border border-blue-500 bg-blue-500 hover:bg-blue-700 w-full p-3 mb-2 mt-3 text-white font-bold rounded focus:outline-none focus:shadow-outline">
            登入
          </button>
          {error && (
            <span className="flex justify-center text-red-700 text-lg font-semibold">
              帳號或密碼有誤，請重新登入
            </span>
          )}
          <p className="py-2">
            還沒有帳號？
            <Link to="/signup" className="text-sky-500 underline">
              點此註冊
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
