import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db, getCurrentUserId } from "../../firebase";

const Album = () => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(db, "Playlists"),
        where("uid", "==", getCurrentUserId())
      ),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        list.sort((a, b) =>b.timestamp - a.timestamp);
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

  return (
    <div className="scrollbar px-4 mb-20">
      <h1 className="mt-2 mb-4 ml-3 text-lg lg:text-2xl font-bold">
        你的播放清單
      </h1>

      <div className="pl-3 grid grid-cols-1 gap-4 tablet:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {playlist.length === 0 ? (
          <p className="text-lg">還沒建立播放清單</p>
        ) : (
          playlist.map((item) => (
            <Link key={item.id} to={`/album/user-playlist/${item.id}`}>
              <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
                <img
                  className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
                  src={item.imgURL}
                  alt="播放列表封面"
                />
                <div className="mt-2 lg:mt-5">
                  <h1 className="font-bold truncate ...">{item.title}</h1>
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
