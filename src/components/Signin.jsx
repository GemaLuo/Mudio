import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import earphone from "../img/login-page-pic.jpg";

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
    }
  };

  return (
    <section className="bg-[#8b8f86] flex w-full h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 m-auto h-[450px] shadow-lg shadow-gray-600 rounded-2xl ">
        {/*左邊*/}
        <div className="w-full h-[450px] hidden sm:block">
          <img
            className="w-full h-full rounded-l-xl"
            src={earphone}
            alt="封面相片"
          />
        </div>

        {/* 右邊 */}
        <div className="p-6 tablet:p-8 flex flex-col rounded-xl sm:rounded-l-none sm:rounded-r-xl bg-[#e2e7dc] justify-around">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <h1 className="font-mudio text-center text-[#97c291] text-4xl font-semibold">
              MUDIO
            </h1>
            <h1 className="text-center text-2xl font-bold">登 入</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl shadow appearance-none px-4 py-3 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="信箱"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-xl shadow appearance-none px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="密碼"
            />

            <button className="w-full border border-[#76806f] bg-[#76806f] hover:bg-[#979c93] hover:border-[#979c93] hover:scale-105 duration-300 active:scale-100 active:duration-75 ease-in-out transition p-2 mt-2 text-white font-bold rounded-xl focus:outline-none focus:shadow-outline">
              登 入
            </button>
            {error && (
              <span className="flex justify-center text-red-700 text-base font-semibold">
                帳號或密碼有誤，請重新登入
              </span>
            )}
            <p className="flex justify-center">
              還沒有帳號？
              <Link
                to="/signup"
                className="text-[#76806f] hover:text-[#979c93] underline"
              >
                點此註冊
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
