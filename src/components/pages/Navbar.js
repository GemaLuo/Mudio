import React, { useState, useRef, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Dropbox from "../utils/Dropbox";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setOpenSidebar, openSidebar }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(1);
  };

  const [toggleDropbox, setToggleDropbox] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggleDropbox(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="w-full h-[5rem] flex items-center px-4 justify-between">
      <div className="flex items-center">
        <HiOutlineMenuAlt2
          className="text-2xl lg:hidden cursor-pointer text-zinc-400 hover:text-white"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
        <MdArrowBackIos onClick={goBack} className="bg-neutral-900 rounded-full h-10 w-10 p-1 pl-3 ml-5 cursor-pointer text-neutral-400 hover:text-white" />
        <MdArrowForwardIos onClick={goForward} className="bg-neutral-900 rounded-full h-10 w-10 px-2 py-1 m-4 cursor-pointer text-neutral-400 hover:text-white" />
      </div>

      <div
        ref={menuRef}
        className="cursor-pointer flex items-center bg-black p-2 rounded-full"
        onClick={() => {
          setToggleDropbox(!toggleDropbox);
        }}
      >
        <BiUserCircle className="bg-neutral-400 p-1 rounded-full h-7 w-7" />
        <h2 className="font-sans ml-2 font-bold">User</h2>
        <IoMdArrowDropdown className="ml-2 cursor-pointer" />
        {toggleDropbox && <Dropbox />}
      </div>
    </div>
  );
};

export default Navbar;
