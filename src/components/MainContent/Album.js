import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const Album = () => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "Playlists"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPlaylist(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  console.log("playlists", playlist);
  return (
    <div className="scrollbar px-4 mb-20">
      <h1 className="mt-8 mb-4 ml-6 text-lg lg:text-2xl font-bold">
        你的播放清單
      </h1>
      <div className="px-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {playlist.length === 0 ? (
          <p>還沒建立播放清單</p>
        ) : (
          playlist?.map((item, id) => (
            <Link key={id} to={`/album/user-playlist/${id}`}>
              <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
                <img
                  className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
                  src={item.imgURL}
                  alt="播放列表封面"
                />
                <div className="mt-2 lg:mt-5">
                  <h1 className="font-bold truncate ...">{item.title}</h1>
                  {/* <p className="text-zinc-500 mt-2 line-clamp-1">{description}</p> */}
                  <p className="text-zinc-500 mt-2 line-clamp-1">
                    {item.timestamp.toDate().toString()}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Album;
