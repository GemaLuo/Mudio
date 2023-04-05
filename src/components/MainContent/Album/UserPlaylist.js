import React, { useState } from "react";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import PlayerContext from "../../../context/PlayerContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const UserPlaylist = () => {
  const { currentSong, SetCurrent, playing } =
    useContext(PlayerContext);
  const { id } = useParams();

  const [playlist, setPlaylist] = useState([]);
  const [options, setOptions] = useState([]);

  const docRef = doc(db, "Playlists", id);
  getDoc(docRef)
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const timestamp=data.timestamp;
        const date=new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000).toLocaleDateString();
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

  // console.log("playlist", playlist.timestamp);
  // console.log("options", options.map((item) => item.label));
  
  return (
    <div className="w-full overflow-auto">
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
            <span className="invisible md:visible">
              {playlist.description}
            </span>
          </p>
        </div>
      </div>

      <div className="mx-4 mb-12 relative top-16 md:top-2 md:left-4 md:w-11/12">
        <p className="invisible md:flex md:justify-between md:visible md:mt-3 md:mb-14 pb-2 pl-4 text-lg border-b border-zinc-600 text-zinc-400">
          #<span className="absolute left-[3.5rem]">標題</span>
          <HiOutlineClock className="relative top-1 right-6 lg:right-10" />
        </p>

        <table className="w-full -mt-10">
          {options.map((item, i) => (
            <tbody
              key={i}
              onClick={() => SetCurrent(item.value)}
              className={currentSong === item.value ? "text-green-500" : ""}
            >
              <tr className="hover:bg-zinc-700 group cursor-pointer">
                <td className="rounded-l-md">
                  <div className="flex items-center md:w-3/4">
                    <p className="ml-2 py-4 md:ml-4 md:mr-4 group-hover:invisible flex">
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
                    <p className="ml-4 line-clamp-1 font-medium">
                      {item.label}
                    </p>
                  </div>
                </td>
                <td className="rounded-r-md pr-4 lg:pr-0 text-neutral-400">
                  {item.songDuration}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>

    // <div className="mt-2 ml-8 mb-24">

    //   <div className="flex items-center ml-4">
    //     <BiSearch className="text-2xl z-10 text-black -mr-9" />
    //     <input
    //       onChange={(e) => setSearch(e.target.value)}
    //       placeholder="加入你的播放清單"
    //       className="focus:border-neutral-500 border bg-white text-black outline-none pl-11 py-2 pr-4 rounded-full md:w-1/4"
    //     />
    //   </div>
    //   <div className="mt-2 mb-14 md:mt-4 relative top-16 md:top-10 md:left-0 md:w-11/12">
    //     {search === "" || search === null ? (
    //       <div></div>
    //     ) : (
    //       <table className="w-[90%] md:w-full -mt-10">
    //         {Songs.filter((item) => {
    //           return search.toLowerCase() === ""
    //             ? item
    //             : item.songName.toLowerCase().includes(search);
    //         }).map((song) => (
    //           <tbody key={song?.id}>
    //             <tr className="hover:bg-zinc-600 group cursor-pointer">
    //               <td className="rounded-l-md">
    //                 <div className="flex items-center md:w-3/4">
    //                   <p className="ml-2 py-4 md:ml-4 md:mr-0  flex">
    //                     <img className="w-10" src={song?.imgSrc} />
    //                     {/* <span className="-ml-4 md:-ml-7 md:mt-1 text-2xl invisible group-hover:visible">
    //                       <BsPlayFill />
    //                     </span> */}
    //                   </p>
    //                   <p className="ml-4 line-clamp-1 font-medium">
    //                     {song?.songName}
    //                   </p>
    //                 </div>
    //               </td>
    //               {/* <td>
    //                 {add ? (
    //                   <AiOutlineCheck className="text-xl" />
    //                 ) : (
    //                   <button
    //                     onClick={saveSong}
    //                     className="border-[1px] py-1 px-3 text-gray-300 rounded-3xl border-gray-400 hover:text-white duration-200 hover:scale-110 transform active:scale-90 transition-transform hover:border-white"
    //                   >
    //                     新增
    //                   </button>
    //                 )}
    //               </td> */}
    //               <td className="rounded-r-md pr-4 lg:pr-0 text-center">
    //                 {song?.songDuration}
    //               </td>
    //             </tr>
    //           </tbody>
    //         ))}
    //       </table>
    //     )}
    //   </div>
    // </div>
  );
};

export default UserPlaylist;

// import React, { useEffect, useState } from "react";
// import { TbCloudUpload } from "react-icons/tb";
// import {
//   getDocs,
//   query,
//   serverTimestamp,
//   setDoc,
//   doc,
//   collection,
// } from "firebase/firestore";
// import { db, storage } from "../../../firebase";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// const UserPlaylist = () => {
//   const [file, setFile] = useState("");
//   const [artist, setArtist] = useState("");
//   const [song, setSong] = useState("");
//   const [progress, setProgress] = useState(null);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (file && song && artist) {
//       try {
//         let data = { song, artist, file };
//         const q = query(collection(db, "Playlists"));
//         const querySnapshot = await getDocs(q);
//         const queryData = querySnapshot.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         console.log(queryData);
//         queryData.map(async (v) => {
//           await setDoc(doc(db, `Playlists/${v.id}/song-details`, data.artist), {
//             data,
//             createdAt: serverTimestamp(),
//           });
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     alert("新增成功！");
//     e.reset();
//   };
//   //render
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const q = query(collection(db, "Playlists"));
//       const snapshot = await getDocs(q);
//       const data = snapshot.docs.map((doc) => ({
//         ...doc.data(),
//         id: doc.id,
//       }));
//       data.map(async (v) => {
//         const songQ = query(collection(db, `Playlists/${v.id}/song-details`));
//         const songDetails = await getDocs(songQ);
//         const songInfo = songDetails.docs.map((doc) => ({
//           ...doc.data(),
//           id: doc.id,
//         }));
//         setList(songInfo);
//       });
//     };
//     getData();
//   }, []);

//   useEffect(() => {
//     const uploadFile = () => {
//       const storageRef = ref(
//         storage,
//         `playlist-URL/${Date.now()}+${file.name}`
//       );
//       const uploadTask = uploadBytesResumable(storageRef, file);
//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("upload is " + progress + "% done");
//           setProgress(progress);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("upload is paused.");
//             case "running":
//               console.log("upload is running.");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setSong(() => ({ file: downloadURL }));
//           });
//         }
//       );
//     };
//     file && uploadFile();
//   }, [file]);
//   return (
//     <div className="pl-8">
//       <p className="text-2xl font-bold pb-4">為你的播放清單加入一些內容</p>
//       <div className="flex items-center mt-6">
//         <div>
//           <form onSubmit={handleSubmit} className="text-xl">
//             <div className="pb-3">
//               <input
//                 onChange={(e) => {
//                   setArtist(e.target.value);
//                 }}
//                 value={artist}
//                 type="text"
//                 maxLength="50"
//                 className="tracking-wider font-light focus:outline-[#757575] placeholder-[#c9c8c8] border-neutral-700 bg-[#5f5e5e] py-3 px-4 border rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="藝人"
//                 required
//               />
//             </div>
//             <div className="pb-3">
//               <input
//                 onChange={(e) => {
//                   setSong(e.target.value);
//                 }}
//                 value={song}
//                 type="text"
//                 maxLength="50"
//                 className="tracking-wider font-light focus:outline-[#757575] placeholder-[#c9c8c8] border-neutral-700 bg-[#5f5e5e] py-3 px-4 border rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="曲名"
//                 required
//               />
//             </div>
//             <div className="pb-3">
//               <input
//                 onChange={(e) => setFile(e.target.value)}
//                 style={{ display: "none" }}
//                 type="file"
//                 id="file"
//                 value={file}
//               />
//               <label
//                 htmlFor="file"
//                 className="flex items-center justify-center cursor-pointer"
//               >
//                 <TbCloudUpload className="text-4xl" />
//                 <p className="text-center ml-2">點此上傳檔案</p>
//               </label>
//             </div>
//             <div className="flex justify-center pb-2">
//               <button
//                 type="submit"
//                 className="px-10 py-1 tracking-widest font-medium text-lg bg-zinc-600 hover:bg-zinc-500 rounded"
//               >
//                 新增
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <hr className="w-[70%] mt-8" />
//       <div className="mb-20 md:mt-4 relative top-16 md:top-10 md:left-0 md:w-11/12">
//         <div className="w-[90%] md:w-[80%] -mt-6">
//           {list.map((detail, index) => {
//             return (
//               <div key={index}>
//                 <div className="hover:bg-zinc-600 cursor-pointer">
//                   <p className="rounded-l-md pl-4">`${index + 1}`</p>
//                   <p className="rounded-r-md">
//                     <div className="flex items-center md:w-5/6">
//                       <p className="py-4 md:ml-4 md:mr-0 flex">{detail.song}</p>
//                       <p className="ml-4 line-clamp-1 font-medium">
//                         {detail.artist}
//                       </p>
//                     </div>
//                     <audio controls>
//                       <source src={detail.file} type="audio/mpeg" />
//                     </audio>
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPlaylist;
