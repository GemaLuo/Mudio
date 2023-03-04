import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CgMusic } from "react-icons/cg";
import { HiOutlinePencil } from "react-icons/hi";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage, db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";

const initialState = {
  title: "",
  description: "",
};

const CreatePlaylistModal = ({ open, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const { title, description } = form;
  const res = UserAuth();

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, `/playlist-cover/${Date.now()}+${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload is " + progress + "% done");
          setProgress(progress);
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

  console.log("form", form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && title) {
      try {
        await addDoc(collection(db, "Playlists"), {
          ...form,
          timestamp: serverTimestamp().toDate(),
          uid: res.user.uid,
        });
      } catch (err) {
        console.log(err);
      }
    }
    alert("新增成功");
    onClose();
  };
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
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
            <div className="pl-4">
              <div className="pb-3">
                <input
                  onChange={handleChange}
                  value={title}
                  name="title"
                  type="text"
                  maxLength="50"
                  className="tracking-wider font-light focus:outline-[#757575] placeholder-[#a9a9a9] border-neutral-700 bg-[#3e3d3d] py-3 px-4 border rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="播放清單標題"
                />
              </div>

              <div>
                <textarea
                  onChange={handleChange}
                  value={description}
                  name="description"
                  maxLength="200"
                  className="w-full resize-none focus:outline-[#757575] placeholder-[#a9a9a9] h-[135px] tracking-wider border-neutral-700 bg-[#3e3d3d] border py-3 px-4 shadow-md rounded-md appearance-none leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="新增說明（選填）"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={progress !== null && progress < 100}
              className="text-lg font-medium border-zinc-700 bg-zinc-800 hover:bg-zinc-900 text-white px-52 py-2 border rounded-full"
            >
              新 增
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
