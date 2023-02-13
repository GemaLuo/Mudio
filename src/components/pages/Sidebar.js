import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import {CgClose} from 'react-icons/cg'

const Sidebar = ({openSidebar, setOpenSidebar}) => {
  return (
    <div className={`h-full w-[15rem] max-w-[15rem] p-5 bg-slate-800 text-gray-400 group ${!openSidebar && "-translate-x-[15rem]"} transition ease-in-out duration-500 fixed left-0 top-2 lg:static`}>
      <div className="flex items-center justify-between">
        <div className="font-bold text-4xl text-[#1DB954]">Mudio</div>
        <CgClose className="text-2xl lg:hidden" onClick={()=>setOpenSidebar(false)}/>
      </div>
      <div className="mt-8">
        <Link to={""}>
          <div className="flex items-center mt-4 hover:text-white">
            <HiHome className=" text-gray-400 text-2xl" />
            <h2 className="font-semibold font-sans ml-4">首頁</h2>
          </div>
        </Link>
        <Link to={""}>
          <div className="flex items-center mt-2 hover:text-white">
            <BiSearch className=" text-gray-400 text-2xl" />
            <h2 className="font-semibold font-sans ml-4">搜尋</h2>
          </div>
        </Link>
        <Link to={""}>
          <div className="flex items-center mt-2 hover:text-white">
            <VscLibrary className=" text-gray-400 text-2xl" />
            <h2 className="font-semibold font-sans ml-4">我的音樂庫</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
