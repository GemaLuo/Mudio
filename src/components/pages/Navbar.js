import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {BiUserCircle} from 'react-icons/bi';
import {MdArrowDropDown} from 'react-icons/md';
import {HiOutlineMenuAlt2} from 'react-icons/hi';

const Navbar = ({setOpenSidebar, openSidebar}) => {
  return (
    <div className="w-full h-[5rem] bg-slate-800 flex items-center px-4 justify-between">
      
      <div className="flex items-center">
      <HiOutlineMenuAlt2 className="text-2xl lg:hidden" onClick={()=>setOpenSidebar(!openSidebar)}/>
        <MdArrowBackIos className="bg-gray-900 rounded-full h-10 w-10 p-1 pl-3 mx-4"/>
        <MdArrowForwardIos className="bg-gray-900 rounded-full h-10 w-10 px-2 py-1 m-4" />
      </div>
      <div className="flex items-center bg-black p-2 rounded-full">
        <BiUserCircle className="bg-gray-400 p-1 rounded-full h-7 w-7" />
        <h2 className="font-sans ml-2 font-bold">User</h2>
        <MdArrowDropDown className="ml-2"/>
      </div>
    </div>
  );
};

export default Navbar;
