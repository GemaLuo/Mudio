import React from "react";
import { RxShuffle } from "react-icons/rx";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { HiPlay } from "react-icons/hi";
import { TbRepeat } from "react-icons/tb";
import { SlVolume2 } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="px-2 md:px-4 lg:px-8 z-50 flex items-center justify-between text-white absolute bottom-0 left-0 h-[6rem] bg-neutral-900 w-full border-t border-neutral-800">
      <div className="flex items-center w-full h-full">
        <img
          className="w-14 hidden lg:block"
          src="https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FVieuxtemps%20violin%20concerto%20no.5%20op.37%20bruch%20scottish%20fantasy%2C%20op.46.png?alt=media&token=2cb905a9-35a6-4143-94fc-13b0c43e0615"
        />
        <div className="lg:pl-4">
          <h1 className="text-lg font-medium">title</h1>
          <a
            className="hover:underline text-sm text-gray-300 hover:text-white"
            href="/artist=heifetz"
          >
            Jascha Heifetz
          </a>
        </div>
      </div>
      <div className="w-full">
        <div className="h-full flex ml-3 justify-center space-x-3 md:space-x-4 lg:space-x-5">
          <RxShuffle className="text-2xl text-gray-400 hover:text-white" />
          <IoPlaySkipBack className="text-2xl text-gray-400 hover:text-white" />
          <HiPlay className="text-5xl -mt-3 hover:scale-110 cursor-pointer focus:ring-4 shadow-lg transform active:scale-90 transition-transform" />
          <IoPlaySkipForward className="text-2xl text-gray-400 hover:text-white" />
          <TbRepeat className="text-2xl text-gray-400 hover:text-white" />
        </div>
      </div>

      <div className="flex w-full h-full justify-end items-center">
        <SlVolume2 className="text-lg" />
        <div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
