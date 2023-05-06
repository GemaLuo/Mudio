import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FcAddImage } from "react-icons/fc";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import earphone from "../img/login-page-pic.jpg";

const Signup = () => {
  const [error, setError] = useState(false);
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUser(email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          } catch (error) {
            
            setError(true);
          }
        });
      });
      navigate("/signin");
    } catch (error) {
      setError(true);
      
    }
  };

  return (
    <section className="bg-[#8b8f86] w-full h-screen flex">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
            <h1 className="font-mudio text-center text-[#97c291] text-4xl font-semibold">
              MUDIO
            </h1>
            <h1 className="text-center text-2xl font-bold">註 冊</h1>
            <input
              className="w-full border rounded-xl shadow appearance-none px-4 py-2 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="使用者名稱"
            />

            <input
              className="w-full border rounded-xl shadow appearance-none px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="電子信箱"
            />

            <input
              className="w-full border rounded-xl shadow appearance-none px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="密 碼"
            />

            <div className="flex flex-col">
              <input style={{ display: "none" }} type="file" id="file" />
              <label
                htmlFor="file"
                className="cursor-pointer flex items-center"
              >
                <FcAddImage className="w-10 h-10" />
                <span className="pl-2 tracking-wider text-gray-500">
                  選擇相片
                </span>
              </label>
            </div>
            <button className="w-full border border-[#76806f] bg-[#76806f] hover:bg-[#979c93] hover:border-[#979c93] hover:scale-105 duration-300 active:scale-100 active:duration-75 ease-in-out transition p-[4px] text-white font-bold rounded-xl focus:outline-none focus:shadow-outline">
              註 冊
            </button>
            {error && (
              <span className="flex justify-center text-red-700 text-base font-semibold">
                註冊失敗，請重新註冊
              </span>
            )}
            <p className="flex justify-center">
              已經有帳號？
              <Link
                to="/signin"
                className="text-[#76806f] hover:text-[#979c93] underline"
              >
                點此登入
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
