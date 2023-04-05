import React, { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Songs } from "./Album/Songs";
import { useContext } from "react";
import PlayerContext from "../../context/PlayerContext";
import { IoStatsChart } from "react-icons/io5";

const Artist = () => {
  const { currentSong, SetCurrent, playing } = useContext(PlayerContext);
  const heifetz =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2Fjascha-heifetz.jpeg?alt=media&token=94977433-2674-421c-bc07-43824acedca5";

  const korngold =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FKorngold.png?alt=media&token=4046692d-514a-4ecd-a00f-faf89d3bb74c";

  const viuxtemps =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FVieuxtemps%20violin%20concerto%20no.5%20op.37%20bruch%20scottish%20fantasy%2C%20op.46.png?alt=media&token=2cb905a9-35a6-4143-94fc-13b0c43e0615";

  const quartet =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FPiano%20Quartet%20Image.png?alt=media&token=9da63c22-5818-45d7-b552-34dfdb0ded95";

  const getRandom = (songsCount) => {
    let randomNumber = Math.floor(Math.random() * Songs.length);
    let i = 0;
    const newArray = [];
    while (i < songsCount) {
      newArray.push(Songs[randomNumber % Songs.length]);
      randomNumber++;
      i++;
    }
    return newArray;
  };

  const [randomSongs, setRandomSongs] = useState([]);
  useEffect(() => {
    setRandomSongs(getRandom(5));
  }, []);

  return (
    <div className="w-full overflow-auto">
      <div
        className="relative opacity-70 bg-local justify-center overflow-auto h-80 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${heifetz})` }}
      ></div>
      <div className="relative flex items-center ml-9 -top-40">
        <BsPatchCheckFill className="text-blue-500 text-2xl mr-2" />
        <p className="font-light tracking-wide">已認證的藝人</p>
      </div>
      <p className="relative ml-8 mr-8 -top-36 text-white font-extrabold text-5xl md:text-7xl">
        Jascha Heifetz
      </p>

      <div className="mx-4 -mt-16">
        <p className="mb-4 pl-2 text-2xl font-bold">熱門</p>

        <table className="w-5/6 ml-2">
          { randomSongs.map((song, index) => (
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
                  <td className="rounded-r-md pr-4 lg:pr-0 text-neutral-400">
                    {song?.songDuration}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>

        <div className="mt-4">
          <p className="mb-4 pl-2 text-2xl font-bold">專輯</p>
        </div>
      </div>

      <div className="px-6 mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <Link to="/album-viuxtemps">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-700 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={viuxtemps}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Viuxtemps: Violin Concerto No.5 Op.37-Bruch:Scottish Fantasy,
                Op.46
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>

        <Link to="/album-piatigorsky">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-700 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={quartet}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Brahms: Piano Quartet No. 3 in C Minor, Op. 60 - Dvořák: Piano
                Quintet No. 2 in A Major, Op. 81
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>

        <Link to="/album-korngold">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-700 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={korngold}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Korngold Violin Concerto in D, Lalo Symphonie Espagnole
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Artist;
