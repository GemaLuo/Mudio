import React from "react";
import { GoSearch } from "react-icons/go";

const Search = () => {

  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FVieuxtemps%20violin%20concerto%20no.5%20op.37%20bruch%20scottish%20fantasy%2C%20op.46.png?alt=media&token=2cb905a9-35a6-4143-94fc-13b0c43e0615";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FPiano%20Quartet%20Image.png?alt=media&token=9da63c22-5818-45d7-b552-34dfdb0ded95";
  const img3 =
    "https://firebasestorage.googleapis.com/v0/b/mudio-enjoy-music.appspot.com/o/images%2FKorngold.png?alt=media&token=4046692d-514a-4ecd-a00f-faf89d3bb74c";

  return (
    <div className="mt-4 ml-4">
      <div className="flex items-center ml-2">
        <GoSearch className="text-2xl -mr-9" />
        <input
          placeholder="想聽什麼？"
          className="border bg-transparent pl-11 py-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default Search;
