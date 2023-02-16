import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {BiUserCircle} from 'react-icons/bi';
import {IoMdArrowDropdown} from 'react-icons/io';
import {HiOutlineMenuAlt2} from 'react-icons/hi';

const Navbar = ({setOpenSidebar, openSidebar}) => {
  return (
    <div className="w-full h-[5rem] bg-slate-800 flex items-center px-4 justify-between">
      
      <div className="flex items-center">
      <HiOutlineMenuAlt2 className="text-2xl lg:hidden cursor-pointer text-gray-400 hover:text-white" onClick={()=>setOpenSidebar(!openSidebar)}/>
        <MdArrowBackIos className="bg-gray-900 rounded-full h-10 w-10 p-1 pl-3 ml-5 cursor-pointer text-gray-400 hover:text-white"/>
        <MdArrowForwardIos className="bg-gray-900 rounded-full h-10 w-10 px-2 py-1 m-4 cursor-pointer text-gray-400 hover:text-white" />
      </div>
      <div className="flex items-center bg-black p-2 rounded-full">
        <BiUserCircle className="bg-gray-400 p-1 rounded-full h-7 w-7" />
        <h2 className="font-sans ml-2 font-bold">User</h2>
        <IoMdArrowDropdown className="ml-2 cursor-pointer"/>
      </div>
    </div>
  );
};

export default Navbar;
