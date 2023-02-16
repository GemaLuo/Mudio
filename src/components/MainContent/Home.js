import React from "react";
import { BsPlayFill } from "react-icons/bs";
const Home = () => {
  return (
    <>
      <h1 className="mt-4 ml-4 text-2xl lg:text-2xl font-bold">
        Good Morning
      </h1>
      <div className="mt-4">
        <div className="mx-4 h-28 bg-gray-700 overflow-hidden rounded-lg flex items-center justify-between group">
          <div className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/music-develop.appspot.com/o/image%2FMstislav.jpeg?alt=media&token=9085903c-475f-4eef-bc72-e0b64b40e177"
              className="w-32 object-cover"
            />
            <h1 className="ml-4 text-lg lg-text-xl font-semibold justify-between">
              Classical
            </h1>
          </div>
          <div className="cursor-pointer hover:scale-110 bg-green-500 w-16 h-16 rounded-full flex justify-center items-center mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
            <BsPlayFill className="text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
