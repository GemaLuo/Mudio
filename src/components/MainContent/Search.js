import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Songs } from "./Album/Songs";
import { BsPlayFill } from "react-icons/bs";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div className="mt-2 ml-10">
      <div className="flex items-center ml-4">
        <BiSearch className="text-2xl z-10 text-black -mr-9" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="想聽什麼？"
          className="focus:border-neutral-500 border bg-white text-black outline-none pl-11 py-2 pr-4 rounded-full md:w-2/5"
        />
      </div>
      <div className="mt-2 mb-14 md:mt-4 relative top-16 md:top-10 md:left-0 md:w-11/12">
        {search === "" || search === null ? (
          <div >
            <img className="lg:w-[60%] lg:h-[60%]" src="https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2Fundraw_house_searching_re_stk8.svg?alt=media&token=85c1448c-768b-4a80-9fb2-fadbf44c5508" />
          </div>
        ) : (
          <table className="w-[90%] md:w-full -mt-10">
            {
              Songs.filter((item) => {
                return search.toLowerCase() === ""
                  ? item 
                  : item.songName.toLowerCase().includes(search);
              }).map((song) => (
                <tbody key={song?.id}>
                  <tr className="hover:bg-zinc-600 group cursor-pointer">
                    <td className="rounded-l-md">
                      <div className="flex items-center md:w-3/4">
                        <p className="ml-2 py-4 md:ml-4 md:mr-0 group-hover:invisible flex">
                          <img className="w-10" src={song?.imgSrc} />
                          <span className="-ml-4 md:-ml-7 md:mt-1 text-2xl invisible group-hover:visible">
                            <BsPlayFill />
                          </span>
                        </p>
                        <p className="ml-4 line-clamp-1 font-medium">
                          {song?.songName}
                        </p>
                      </div>
                    </td>
                    <td className="rounded-r-md pr-4 lg:pr-0">
                      {song?.songDuration}
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

export default Search;
