import React, { useEffect, useRef, useState } from "react";
import { RxShuffle } from "react-icons/rx";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { HiPlay, HiPause } from "react-icons/hi";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PlayerContext from "../../context/PlayerContext";
import { useContext } from "react";

const Footer = () => {
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [volume, setVolume] = useState(100);

  //close volume on click outside
  let audio = useRef("audio_tag");
  let volumeRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!volumeRef.current.contains(e.target)) {
        setIsVolumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    audio.current.addEventListener("volumechange", (e) => {
      setVolume(+e.target.volume);
    });
    audio.current.addEventListener("ended", () => {
      nextSong();
    });
  }, []);

  const {
    currentSong,
    nextSong,
    prevSong,
    random,
    playing,
    toggleRandom,
    togglePlaying,
    handleEnd,
    songslist,
  } = useContext(PlayerContext);

  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggleAudio = () => {
    if (audio.current.paused) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };
  useEffect(() => {
    if (playing) {
      toggleAudio();
    }
  }, [currentSong]);

  const handleProgress = (value) => {
    let compute = (value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  };
  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (10 < s ? ":" : ":0") + ~~s;
  };

  return (
    <div className="px-2 md:px-4 lg:px-8 z-50 flex items-center justify-between text-white absolute bottom-0 left-0 h-[7rem] bg-neutral-900 w-full border-t border-neutral-700">
      <div className="flex items-center w-full">
        <img
          className="w-14 hidden md:block"
          src={songslist[currentSong].imgSrc}
        />
        <div className="ml-2 md:pl-2 lg:pl-4">
          <h1 className="w-[72px] tablet:w-24 md:w-36 lg:w-64 text-lg font-medium line-clamp-2">
            {songslist[currentSong].songName}
          </h1>
          <a
            className="hover:underline line-clamp-1 text-sm text-gray-300 hover:text-white"
            href="/artist=heifetz"
          >
            Jascha Heifetz
          </a>
        </div>
      </div>

      <div className="w-full">
        <audio
          ref={audio}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onCanPlay={(e) => setDur(e.target.duration)}
          onEnded={handleEnd}
          type="audio/mpeg"
          preload="true"
          src={songslist[currentSong].song}
        />
        <div className="flex ml-14 justify-left tablet:ml-0 tablet:justify-center md:ml-3 md:justify-center space-x-2 md:space-x-4 lg:space-x-5">
          <IoPlaySkipBack
            onClick={prevSong}
            className="cursor-pointer text-2xl text-gray-400 hover:text-white"
          />
          <div
            onClick={() => {
              togglePlaying();
              toggleAudio();
            }}
          >
            {!playing ? (
              <HiPlay className="text-5xl -mt-3 hover:scale-110 cursor-pointer focus:ring-4 shadow-lg transform active:scale-90 transition-transform" />
            ) : (
              <HiPause className="text-5xl -mt-3 hover:scale-110 cursor-pointer focus:ring-4 shadow-lg transform active:scale-90 transition-transform" />
            )}
          </div>
          <IoPlaySkipForward
            onClick={nextSong}
            className="text-2xl cursor-pointer text-gray-400 hover:text-white"
          />
        </div>
        <div className="flex items-center justify-between w-60 sm:w-72 md:w-80 lg:w-full">
          <div className="md:-mr-7 md:mt-1 invisible md:visible md:text-base">
            {fmtMSS(currentTime)}
          </div>
          <Slider
            value={dur ? (currentTime * 100) / dur : 0}
            onChange={handleProgress}
            trackStyle={{ background: "rgb(94 194 105)" }}
            handleStyle={{
              background: "#fff",
              boxShadow: "none",
              border: "0.5px solid #fff",
              opacity: 1,
            }}
            railStyle={{ background: "rgb(94, 93, 93)" }}
            className="-ml-2 mt-2 tablet:ml-1 md:ml-9"
          />
          <div className="invisible md:mt-1 md:ml-1 md:visible md:text-base">
            {fmtMSS(dur)}
          </div>
        </div>
      </div>

      <div className="flex w-full h-full justify-end items-center">
        <RxShuffle
          onClick={toggleRandom}
          className={
            random
              ? "text-xl mr-2 cursor-pointer text-green-500 hover:text-green-400 "
              : "text-xl mr-2 cursor-pointer text-gray-400 hover:text-white"
          }
        />
        <div
          ref={volumeRef}
          onClick={() => {
            setIsVolumeOpen(!isVolumeOpen);
          }}
          className="relative hidden md:flex items-center h-full"
        >
          {isVolumeOpen && (
            <div className="flex absolute -top-6 left-2 -translate-x-1/2 -translate-y-1/2 shadow-lg w-8 h-32 rounded-2xl overflow-hidden bg-neutral-400 py-4 justify-center">
              <Slider
                vertical
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(val) => {
                  audio.current.volume = +val;
                }}
              />
            </div>
          )}
          {volume === 0 ? (
            <SlVolumeOff className="text-lg cursor-pointer" />
          ) : (
            <SlVolume2 className="text-lg cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
