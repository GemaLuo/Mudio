import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CgMusic } from "react-icons/cg";
import { HiOutlinePencil } from "react-icons/hi";
import { addDoc, collection, doc, orderBy, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { Songs } from "../MainContent/Album/Songs";
import { MultiSelect } from "react-multi-select-component";

const initialState = {
  title: "",
  description: "",
  options: [],
};

const CreatePlaylistModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { title, description, options } = form;

  const res = UserAuth();
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(
        storage,
        `/playlist-cover/${res.user.displayName}/${Date.now()}+${file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          if (progress === 100) {
            alert("照片上傳完畢");
          }
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused.");
            case "running":
              console.log("upload is running.");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setForm((prev) => ({ ...prev, imgURL: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  // console.log("form", form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const optionsList = Songs.map((items) => {
    return { label: items.songName.toString(), value: items.id, imgURL: items.imgSrc, song: items.song, songDuration: items.songDuration };
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptions = (e) => {
    setSelectedOptions(e);
    setForm({ ...form, options: e });
  };
  // console.log(selectedOptions);
  // console.log([options])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && title && options) {
      try {
        await addDoc(collection(db, "Playlists"), {
          ...form,
          timestamp: serverTimestamp(),
          uid: res.user.uid,
        });
        orderBy('date', 'desc')
      } catch (err) {
        console.log(err);
      }
    }
    alert("新增成功！");
    onClose();
    e.reset();
  };
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-[#282828] shadow-2xl py-4 px-6 rounded"
      >
        <div className="flex justify-between mb-2">
          <p className="text-xl font-semibold">建立播放清單</p>
          <IoCloseOutline
            onClick={onClose}
            className="cursor-pointer text-3xl text-white"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex pt-2 pb-4">
            <div>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
                type="file"
                id="file"
              />
              <label htmlFor="file" className="flex text-center items-center">
                <div className="cursor-pointer text-[#7f7f7f] shadow-2xl shadow-black p-16 w-48 h-48 border border-neutral-700 bg-[#282828] rounded-md group hover:bg-zinc-900 ">
                  <CgMusic className="w-16 h-16 group-hover:invisible" />
                  <HiOutlinePencil className="w-14 h-14 -mt-16 invisible group-hover:visible group-hover:text-white" />
                  <p className="text-center text-[15px] mt-1 invisible group-hover:visible group-hover:text-white">
                    選擇相片
                  </p>
                </div>
              </label>
            </div>
            <div className="pl-4 pt-2 w-64">
              <div className="pb-5">
                <input
                  onChange={handleChange}
                  value={title}
                  name="title"
                  type="text"
                  maxLength="50"
                  className="tracking-wider w-full font-light focus:outline-[#757575] placeholder-[#a9a9a9] border-neutral-700 bg-[#3e3d3d] py-3 px-4 border rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="播放清單標題"
                  required
                />
              </div>
              <div className="w-full pb-3">
                <MultiSelect
                  overrideStrings={{
                    allItemsAreSelected: "已選擇所有選項",
                    clearSearch: "清除搜尋",
                    clearSelected: "清除選項",
                    noOptions: "沒有選項",
                    search: "關鍵字搜尋",
                    selectAll: "選擇全部",
                    selectAllFiltered: "選擇全部（篩選過）",
                    selectSomeItems: "選擇喜歡的曲目...",
                    create: "建立",
                  }}
                  className="dark"
                  options={optionsList}
                  value={selectedOptions}
                  onChange={(e)=> handleOptions(e)}
                  labelledBy="Select"
                />
              </div>
              <div>
                <textarea
                  onChange={handleChange}
                  value={description}
                  name="description"
                  maxLength="200"
                  className="w-full resize-none focus:outline-[#757575] placeholder-[#a9a9a9] h-[46px] tracking-wider border-neutral-700 bg-[#3e3d3d] border mt-2 py-3 px-4 shadow-md rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="新增說明（選填）"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={progress !== null && progress < 100}
              className="disabled:opacity-25 text-lg font-medium border-zinc-700 bg-zinc-800 hover:bg-zinc-900 text-white px-52 py-2 mb-2 border rounded-full"
            >
              新 增
            </button>
          </div>
          <div className="text-center">照片上傳進度：{progress}%</div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
