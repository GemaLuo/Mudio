import React, { useReducer } from "react";
import PlayerReducer from "./PlayerReducer";
import PlayerContext from "./PlayerContext";

import { Songs } from "../components/MainContent/Album/Songs";

const PlayerState = (props) => {
  const initialState = {
    currentSong: 0,
    songslist: Songs,

    random: false,
    playing: true,
    audio: null
  };
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  //Set current song
  const SetCurrent = (id) => dispatch({ type: "SET_CURRENT_SONG", data: id });

  //Set songs array
  const songsSet = (songsArr) =>
    dispatch({ type: "SET_SONGS_ARRAY", data: songsArr });

  //Set playing state
  const togglePlaying = () =>
    dispatch({ type: "TOGGLE_PLAYING", data: state.playing ? false : true });

  //Prev song
  const prevSong = () => {
    if (state.random) {
      return SetCurrent(~~(Math.random() * state.songslist.length));
    }
    if (state.currentSong === 0) {
      SetCurrent(state.songslist.length - 1);
    } else {
      SetCurrent(state.currentSong - 1);
    }
  };

  //Next song
  const nextSong = () => {
    // if (state.repeat){
    //   return SetCurrent(state.currentSong)
    // }
    if (state.random) {
      return SetCurrent(~~(Math.random() * state.songslist.length));
    }
    if (state.currentSong === state.songslist.length - 1) {
      SetCurrent(0);
    } else {
      SetCurrent(state.currentSong + 1);
    }
  };

  //Repeat and Random
  // const toggleRepeat = (id) =>
  //   dispatch({ type: "TOGGLE_REPEAT", data: state.repeat ? false : true });

  const toggleRandom = (id) =>
    dispatch({ type: "TOGGLE_RANDOM", data: state.random ? false : true });

  //End of song
  const handleEnd = () => {
    if (state.random) {
      return SetCurrent(~~(Math.random() * state.songslist.length))
    } else {
      nextSong()
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong: state.currentSong,
        songslist: state.songslist,

        random: state.random,
        playing: state.playing,
        audio: state.audio,
        SetCurrent,
        songsSet,
        nextSong,
        prevSong,
        togglePlaying,
        toggleRandom,
        handleEnd,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
