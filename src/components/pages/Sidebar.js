import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Sidebar = ({ openSidebar, setOpenSidebar, setOpenModal }) => {
  return (
    <div
      className={`z-50 h-full w-[15rem] max-w-[15rem] p-5 bg-black text-gray-400 group ${
        !openSidebar && "-translate-x-[15rem]"
      } transition ease-in-out duration-500 fixed left-0 top-2 lg:static`}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <div className="font-[Poppins] font-semibold text-5xl text-[#1DB954]">
            Mudio
          </div>
        </Link>
        <CgClose
          className="text-2xl lg:hidden cursor-pointer hover:text-white"
          onClick={() => setOpenSidebar(false)}
        />
      </div>
      <div className="mt-8">
        <Link to={"/"}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <HiHome className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">首頁</h2>
          </div>
        </Link>
        <Link to={"/search"}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <BiSearch className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">搜尋</h2>
          </div>
        </Link>

        <Link to={"/album"}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <VscLibrary className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">你的音樂庫</h2>
          </div>
        </Link>
        {/* <Link to={"/favorite"}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <FaHeart className="text-2xl bg-gradient-to-br rounded-sm from-indigo-700 via-indigo-500 to-indigo-200 p-1" />
            <h2 className="font-[700] text-md font-sans ml-4">已按讚的歌曲</h2>
          </div>
        </Link> */}
        <div>
          <button
            className="cursor-pointer flex items-center mt-4 text-neutral-400 hover:text-white"
            onClick={() => setOpenModal(true)}
          >
            <BsPlusSquareFill className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">建立播放清單</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
