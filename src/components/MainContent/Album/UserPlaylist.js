import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import PlayerContext from "../../../context/PlayerContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const UserPlaylist = () => {
  const { currentSong, SetCurrent, playing } = useContext(PlayerContext);
  const { id } = useParams();

  const [playlist, setPlaylist] = useState([]);
  const [options, setOptions] = useState([]);

  const docRef = doc(db, "Playlists", id);
  getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const timestamp = data.timestamp;
        const date = new Date(
          timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
        ).toLocaleDateString();
        setPlaylist({ ...data, id: id, timestamp: date });
        const obj = data.options;
        const arr = Object.values(obj);
        setOptions(arr);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  return (
    <div className="w-full">
      <div className="flex-none md:flex justify-center md:justify-center lg:justify-start bg-gradient-to-b from-zinc-600 to-zinc-800/5 h-72 md:h-80">
        <div className="flex justify-center">
          <img
            className="w-48 relative top-6 shadow-lg shadow-black md:w-60 md:h-60 md:top-10 lg:left-8"
            src={playlist.imgURL}
          />
        </div>
        <div className="md:w-3/5 lg:w-3/6 xl:w-3/6 md:h-2/3 ml-6 mt-8 md:ml-8 lg:mt-6 lg:ml-12 xl:mt-4 ">
          <p className="text-lg line-clamp-2 font-semibold md:font-bold md:text-2xl md:mt-24 lg:mt-28 xl:mt-32">
            {playlist.title}
          </p>
          <p className="text-sm font-medium my-2">
            播放清單・{playlist.timestamp}
            <span className="mt-1 flex flex-col invisible md:visible">
              {playlist.description}
            </span>
          </p>
        </div>
      </div>

      <div className="mx-4 mb-28 md:mb-16 relative top-16 md:top-2 md:left-4 md:w-11/12">
        <p className="invisible md:flex md:justify-between md:visible md:mt-3 md:mb-14 pb-2 pl-6 text-lg border-b border-zinc-600 text-zinc-400">
          #<span className="absolute left-[4.5rem]">標題</span>
        </p>

        <table className="w-full -mt-24 md:-mt-12">
          {options.map((item, i) => (
            <tbody
              key={i}
              onClick={() => SetCurrent(item.value)}
              className={currentSong === item.value ? "text-green-500" : ""}
            >
              <tr className="hover:bg-zinc-700 group cursor-pointer">
                <td className="rounded-2xl">
                  <div className="flex items-center md:w-3/4">
                    <p className="ml-2 pl-2 py-3 md:ml-4 md:mr-4 group-hover:invisible flex ">
                      {currentSong === item.value ? (
                        <IoStatsChart className="-ml-1 mt-1 -mr-1" />
                      ) : (
                        `${i + 1}`
                      )}
                      <span className="text-white -ml-4 text-2xl invisible group-hover:visible">
                        {playing && currentSong === item.value ? (
                          <BsPauseFill />
                        ) : (
                          <BsPlayFill />
                        )}
                      </span>
                    </p>
                    <p className="ml-3 px-1 line-clamp-1  font-medium">
                      {item.label}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserPlaylist;
