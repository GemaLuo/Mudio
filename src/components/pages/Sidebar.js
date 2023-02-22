import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { BsPlusSquareFill } from "react-icons/bs";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <div
      className={`z-50 h-full w-[15rem] max-w-[15rem] p-5 bg-black text-gray-400 group ${
        !openSidebar && "-translate-x-[15rem]"
      } transition ease-in-out duration-500 fixed left-0 top-2 lg:static`}
    >
      <div className="flex items-center justify-between">
        <div className="font-[Poppins] font-semibold text-5xl text-[#1DB954]">
          Mudio
        </div>
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
          <div className="flex items-center mt-3 text-neutral-400 hover:text-white">
            <BiSearch className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">搜尋</h2>
          </div>
        </Link>
        <Link to={"/album"}>
          <div className="flex items-center mt-3 text-neutral-400 hover:text-white">
            <VscLibrary className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">我的音樂庫</h2>
          </div>
        </Link>

        <Link to={"/create-playlist"}>
          <div className="flex items-center mt-3 text-neutral-400 hover:text-white">
            <BsPlusSquareFill className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">建立播放清單</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
