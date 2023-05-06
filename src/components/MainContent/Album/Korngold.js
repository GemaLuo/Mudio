import React from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi2";
import { useContext } from "react";
import PlayerContext from "../../../context/PlayerContext";
import { IoStatsChart } from "react-icons/io5";

const Korngold = () => {
  const { songslist, currentSong, SetCurrent, playing } =
    useContext(PlayerContext);
  const albumList = songslist.slice(0, 7);

  const korngold =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FKorngold.png?alt=media&token=4046692d-514a-4ecd-a00f-faf89d3bb74c";
  const heifetz =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2Fjascha-heifetz.jpeg?alt=media&token=94977433-2674-421c-bc07-43824acedca5";
  return (
    <div className="w-full">
      <div className="flex-none md:flex justify-center md:justify-center lg:justify-start bg-gradient-to-b from-[#4f6649] to-green-800/5 h-72 md:h-80">
        <div className="flex justify-center">
          <img
            className="w-48 relative top-6 shadow-lg shadow-black md:w-60 md:h-60 md:top-10 lg:left-8"
            src={korngold}
          />
        </div>
        <div className="md:w-3/5 lg:w-3/6 xl:w-3/6 md:h-2/3 ml-6 mt-8 md:ml-8 lg:mt-6 lg:ml-12 xl:mt-4 ">
          <p className="text-lg line-clamp-2 font-semibold md:font-bold md:text-2xl md:mt-24 lg:mt-28 xl:mt-32">
            Korngold: Violin Concerto in D Major, Op.35 - Lalo: Symphonie
            Espagnole, Op.21
          </p>
          <p className="text-sm font-medium my-2">
            專輯・1954
            <span className="invisible md:visible">
              ・7 首歌曲，
              <span className="text-gray-300 text-sm">45 分鐘 42 秒</span>
            </span>
          </p>
          <p className="text-white flex font-medium text-base md:text-lg lg:text-lg">
            <img className="rounded-full object-cover w-6 h-6" src={heifetz} />
            <a
              href="/artist=heifetz"
              className="hover:underline ml-1 text-base"
            >
              Jascha Heifetz
            </a>
          </p>
        </div>
      </div>

      <div className="mx-4 mb-28 md:mb-16 relative top-16 md:top-2 md:left-4 md:w-11/12">
        <p className="invisible md:flex md:justify-between md:visible md:mt-3 md:mb-14 pb-2 pl-4 text-lg border-b border-zinc-600 text-zinc-400">
          #<span className="absolute left-[3.5rem]">標題</span>
          <HiOutlineClock className="relative top-1 right-6 lg:right-10" />
        </p>

        <table className="w-full -mt-12">
          {albumList &&
            albumList.map((song, index) => (
              <tbody
                key={index}
                onClick={() => SetCurrent(song?.id)}
                className={currentSong === song?.id ? "text-green-500" : ""}
              >
                <tr className="hover:bg-zinc-700 group cursor-pointer">
                  <td className="rounded-l-2xl">
                    <div className="flex items-center md:w-3/4">
                      <p className="ml-2 pl-2 py-3 md:ml-4 md:mr-4 group-hover:invisible flex">
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
                      <p className="ml-3 pl-1 line-clamp-1 font-medium">
                        {song?.songName}
                      </p>
                    </div>
                  </td>

                  <td className="rounded-r-2xl pr-4 lg:pr-0 text-neutral-400">
                    {song?.songDuration}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Korngold;
