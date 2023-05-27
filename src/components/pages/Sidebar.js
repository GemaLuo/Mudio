import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { BsPlusSquareFill } from "react-icons/bs";

const Sidebar = ({ openSidebar, setOpenSidebar, setOpenModal }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeSidebar = () => {
    if (isSmallScreen) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  };

  return (
    <div
      className={`z-50 h-full w-[15rem] max-w-[15rem] p-5 bg-black text-gray-400 group ${
        !openSidebar && "-translate-x-[15rem]"
      } transition ease-in-out duration-500 fixed left-0 lg:static`}
    >
      <div className="flex items-center justify-between">
        <Link to={"/"} onClick={closeSidebar}>
          <div className="font-mudio text-[#8fb88a] font-bold text-[40px]">
            MUDIO
          </div>
        </Link>
        <CgClose
          className="text-2xl lg:hidden cursor-pointer hover:text-white"
          onClick={() => setOpenSidebar(false)}
        />
      </div>
      <div className="mt-8">
        <Link to={"/"} onClick={closeSidebar}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <HiHome className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">首頁</h2>
          </div>
        </Link>
        <Link to={"/search"} onClick={closeSidebar}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <BiSearch className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">搜尋</h2>
          </div>
        </Link>

        <Link to={"/album"} onClick={closeSidebar}>
          <div className="flex items-center mt-4 text-neutral-400 hover:text-white">
            <VscLibrary className="text-2xl" />
            <h2 className="font-[700] text-md font-sans ml-4">你的音樂庫</h2>
          </div>
        </Link>
        <div onClick={closeSidebar}>
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
