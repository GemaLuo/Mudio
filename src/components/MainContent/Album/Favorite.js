import React, { useContext } from "react";
import { BsPlayFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { Songs } from "./Songs";
import { HiOutlineClock } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import {RiHeartFill} from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import PlayerContext from "../../../context/PlayerContext";
const Favorite = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { songslist, currentSong, SetCurrent, playing } =
  useContext(PlayerContext);
 

  return (
    <div className="ml-10 mb-32">
      <div className="font-bold text-2xl mb-4">你的最愛</div>

      <div className=" relative top-16 md:top-2 md:left-2 md:w-11/12">
     
        <p className="invisible md:flex md:justify-between md:visible md:mt-3 md:mb-14 pb-2 pl-4 text-lg border-b border-zinc-600 text-zinc-400">
          #<span className="absolute left-[3.5rem]">標題</span>
          <HiOutlineClock className="relative top-1 right-6 lg:right-10" />
        </p>

        <table className="w-full -mt-10">
          {songslist.favorite===false ? <tbody><tr><td>您還沒有收藏歌曲</td></tr></tbody> :
            Object.values(songslist).filter((item)=>item.favorite===true).map((song, index) => (
              <tbody
                key={index}
                onClick={() => SetCurrent(song?.id)}
                className={currentSong === song?.id ? "text-green-500" : ""}
              >
                <tr className="hover:bg-zinc-700 group cursor-pointer">
                  <td className="rounded-l-md">
                    <div className="flex items-center md:w-3/4">
                      <p className="ml-2 py-4 md:ml-4 md:mr-4 group-hover:invisible flex">
                        {currentSong === song?.id ? (
                          <IoStatsChart className="-ml-1 mt-1 -mr-1" />
                        ) : (
                          `${index + 1}`
                        )}
                        <span className="text-white -ml-4 text-2xl invisible group-hover:visible">
                          {playing && currentSong === song?.id ? (
                            <BsPauseFill />
                          ) : (
                            <BsPlayFill />
                          )}
                        </span>
                      </p>
                      <p className="ml-4 line-clamp-1 font-medium">
                        {song?.songName}
                      </p>
                    </div>
                  </td>
                  <td onClick={() => changeFavorite(song?.id)}>
                    {song?.favorite ? (
                      <RiHeartFill className="text-lg text-green-400 hover:text-green-300" />
                    ) : (
                      <RiHeartLine className="text-lg text-zinc-300 hover:text-white" />
                    )}
                  </td>
                  <td className="rounded-r-md pr-4 lg:pr-0 text-neutral-400">
                    {song?.songDuration}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      {/* <div className="relative items-center flex flex-col w-[340px] h-[340px] rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-zinc-500 px-4 py-2 w-full flex items-center font-medium justify-between text-xl text-start rounded-lg tracking-wider border-2 border-transparent active:border-gray-300 duration-300 active:text-gray-300 "
        >
          選擇歌曲
          {!isOpen ? (
            <BsFillCaretDownFill className="h-8" />
          ) : (
            <BsFillCaretUpFill className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="bg-zinc-500 absolute top-16 flex flex-col items-start rounded-lg p-2 w-full overflow-y-scroll h-56">
            {Songs.map((item, i)=>(
              <div className="flex w-full p-2 justify-between hover:bg-zinc-400 cursor-pointer  rounded-r-lg border-l-transparent hover:border-l-white border-l-4" key={i}>
                <h3 className="line-clamp-1 font-medium">{item.songName}</h3>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Favorite;
