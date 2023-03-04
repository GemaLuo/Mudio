import React from "react";
import {
  MdOutlinePlaylistAdd,
  MdOutlinePlaylistAddCheck,
} from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { Songs } from "./Songs";
import { useState } from "react";

const UserPlaylist = () => {
  const [search, setSearch] = useState("");
  
  return (
    <div className="pl-8">
      <p className="text-2xl font-bold pb-4">為你的播放清單找些內容</p>
      <div className="flex items-center mt-6 ml-3">
        <BiSearch className="text-2xl z-10 text-black -mr-9" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="想聽什麼？"
          className="focus:border-neutral-500 border bg-white text-black outline-none pl-11 py-2 pr-4 rounded-full"
        />
      </div>
      <div className="mt-2 mb-20 md:mt-4 relative top-16 md:top-10 md:left-0 md:w-11/12">
        {search === "" || search === null ? (
          <></>
        ) : (
          <table className="w-[90%] md:w-[60%] -mt-10">
            {Songs.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.songName.toLowerCase().includes(search);
            }).map((song) => (
              <tbody key={song?.id}>
                <tr className="hover:bg-zinc-600 cursor-pointer">
                  <td className="rounded-l-md pl-4">
                    <MdOutlinePlaylistAdd className="w-6 h-6" />
                    {/* <MdOutlinePlaylistAddCheck /> */}
                  </td>
                  <td className="rounded-r-md">
                    <div className="flex items-center md:w-5/6">
                      <p className="py-4 md:ml-4 md:mr-0 flex">
                        <img className="w-10" src={song?.imgSrc} />
                      </p>
                      <p className="ml-4 line-clamp-1 font-medium">
                        {song?.songName}
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default UserPlaylist;
