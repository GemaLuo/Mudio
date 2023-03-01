import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FVieuxtemps%20violin%20concerto%20no.5%20op.37%20bruch%20scottish%20fantasy%2C%20op.46.png?alt=media&token=2cb905a9-35a6-4143-94fc-13b0c43e0615";

  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FPiano%20Quartet%20Image.png?alt=media&token=9da63c22-5818-45d7-b552-34dfdb0ded95";

  const img4 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FKorngold.png?alt=media&token=4046692d-514a-4ecd-a00f-faf89d3bb74c";

  return (
    <div className="scrollbar px-4">
      <h1 className="mt-6 mb-4 ml-6 text-xl lg:text-2xl font-bold">早安</h1>
      <div className="mr-6 grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="h-20 lg:h-28 ml-6 bg-zinc-900 hover:bg-zinc-800 overflow-hidden rounded-lg flex items-center justify-between group">
          <div className="flex items-center">
            <img className="w-20 lg:w-28 object-cover" src={img1} />
            <p className="lg:w-48 line-clamp-2 ml-4 mr-2 text-lg lg-text-xl font-semibold">
              Viuxtemps: Violin Concerto No.5 Op.37-Bruch:Scottish Fantasy,
              Op.46
            </p>
          </div>
          <div className="cursor-pointer hover:scale-110 bg-green-500 w-14 h-14 rounded-full justify-center items-center mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 hidden lg:flex focus:ring-4 transform active:scale-90 active:bg-green-600">
            <BsPlayFill className="text-4xl text-black" />
          </div>
        </div>

        <div className="h-20 lg:h-28 ml-6 bg-zinc-900 hover:bg-zinc-800 overflow-hidden rounded-lg flex items-center justify-between group">
          <div className="flex items-center">
            <img className="w-20 lg:w-28 object-cover" src={img3} />
            <h1 className="lg:w-48 line-clamp-2 ml-4 mr-2 text-lg lg-text-xl font-semibold">
              Brahms: Piano Quartet No. 3 in C Minor, Op. 60 - Dvořák: Piano
              Quintet No. 2 in A Major, Op. 81
            </h1>
          </div>
          <div className="cursor-pointer hover:scale-110 bg-green-500 w-14 h-14 rounded-full justify-center items-center mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 hidden lg:flex focus:ring-4 transform active:scale-90 active:bg-green-600">
            <BsPlayFill className="text-4xl text-black" />
          </div>
        </div>

        <div className="h-20 lg:h-28 ml-6 bg-zinc-900 hover:bg-zinc-800 overflow-hidden rounded-lg flex items-center justify-between group">
          <div className="flex items-center">
            <img className="w-20 lg:w-28 object-cover" src={img4} />
            <h1 className="lg:w-48 line-clamp-2 ml-4 mr-2 text-lg lg-text-xl font-semibold">
            Korngold: Violin Concerto in D Major, Op.35 - Lalo: Symphonie Espagnole, Op.21
            </h1>
          </div>
          <div className="cursor-pointer hover:scale-110 bg-green-500 w-14 h-14 rounded-full justify-center items-center mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 hidden lg:flex focus:ring-4 transform active:scale-90 active:bg-green-600">
            <BsPlayFill className="text-4xl text-black" />
          </div>
        </div>
      </div>

      <h1 className="mt-8 mb-4 ml-6 text-lg lg:text-2xl font-bold">
        你的熱門合輯
      </h1>

      <div className="px-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <Link to="album-viuxtemps">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={img1}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Viuxtemps: Violin Concerto No.5 Op.37-Bruch:Scottish Fantasy,
                Op.46
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0 focus:ring-4 transform active:scale-90 active:bg-green-600">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>

        <Link to="album-piatigorsky">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={img3}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Brahms: Piano Quartet No. 3 in C Minor, Op. 60 - Dvořák: Piano
                Quintet No. 2 in A Major, Op. 81
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0 focus:ring-4 transform active:scale-90 active:bg-green-600">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>

        <Link to="album-korngold">
          <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
            <img
              className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-lg"
              src={img4}
            />

            <div className="mt-2 lg:mt-5">
              <h1 className="font-bold truncate ...">
                Korngold: Violin Concerto in D Major, Op.35 - Lalo: Symphonie
                Espagnole, Op.21
              </h1>
              <p className="text-zinc-500 mt-2">Jascha Heifetz</p>
            </div>

            <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0 focus:ring-4 transform active:scale-90 active:bg-green-600">
              <BsPlayFill className="text-4xl text-black" />
            </div>
          </div>
        </Link>
      </div>

      <h1 className="mt-6 mb-4 ml-6 text-lg lg:text-2xl font-bold">
        你最愛的音樂家
      </h1>

      
        <div className="px-6 mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Link to="/artist=heifetz">
            <div className="p-4 h-80 cursor-pointer rounded-lg bg-zinc-900 hover:bg-zinc-800 transition ease-in-out duration-300 relative group">
              <img
                className="w-full h-[80%] lg:h-[70%] object-center object-cover rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FJascha-Heifetz.jpg?alt=media&token=2b9092df-9c4e-4673-ab36-a5518fce442e"
              />

              <div className="mt-2 lg:mt-5">
                <h1 className="font-bold truncate ...">Jascha Heifetz</h1>
                <p className="text-zinc-500 mt-2">藝人</p>
              </div>

              <div className="absolute right-3 bottom-28 z-20 cursor-pointer hover:scale-110 bg-green-500 w-12 h-12 rounded-full flex justify-center items-center mr-4 shadow-md transition duration-300 ease-in-out lg:flex group-hover:opacity-100 opacity-0 translate-y-4 group-hover:translate-y-0 focus:ring-4 transform active:scale-90 active:bg-green-600">
                <BsPlayFill className="text-4xl text-black " />
              </div>
              </div>
          </Link>
        </div>
    </div>
  );
};

export default Home;
