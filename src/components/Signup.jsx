import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FcAddImage } from "react-icons/fc";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

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
            // await setDoc(doc(db, `users/${res.user.uid}/UserPlaylist`, res.user.uid), {});
          } catch (error) {
            console.log(error);
            setError(true);
          }
        });
      });
      navigate("/");
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-auto bg-neutral-800 p-5">
      <div className="max-w-[340px] md:max-w-[380px] lg:max-w-[400px] w-full mb-5 p-3">
        <form
          onSubmit={handleSubmit}
          className="bg-neutral-100 shadow-md rounded px-8 pt-6 pb-8"
        >
          <div>
            <h1 className="text-center text-green-500 text-5xl font-extrabold pt-1 pb-3">
              Mudio
            </h1>
            <h1 className="text-center text-2xl font-bold pt-1 pb-3">註冊</h1>
          </div>
          <div className="flex flex-col py-2 mb-2">
            <input
              className="tracking-wider border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="使用者名稱"
            />
          </div>
          <div className="flex flex-col py-2 mb-2">
            <input
              className="tracking-wider border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="電子信箱"
            />
          </div>
          <div className="flex flex-col py-2 mb-2">
            <input
              className="tracking-wider border rounded w-full shadow appearance-none p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="密 碼"
            />
          </div>
          <div className="flex flex-col py-2">
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file" className="cursor-pointer flex items-center">
              <FcAddImage className="w-16 h-16 " />
              <span className="pl-2 tracking-wider text-gray-500">
                選擇相片
              </span>
            </label>
          </div>
          <button className="border border-blue-500 bg-blue-500 hover:bg-blue-700 w-full p-3 mb-2 mt-3 text-white font-bold rounded focus:outline-none focus:shadow-outline">
            註冊
          </button>
          {error && (
            <span className="flex justify-center text-red-700 text-lg font-semibold">
              註冊失敗，請重新註冊
            </span>
          )}
          <p className="py-2">
            已經有帳號？
            <Link to="/signin" className="text-sky-500 underline">
              點此登入
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
