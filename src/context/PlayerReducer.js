let PlayerReducer = (state, action) => {
  switch (action.type) {
    case "SET_SONG_ARRAY":
      return {
        ...state,
        songslist: action.data,
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.data,
        playing: true,
      };
    case "TOGGLE_RANDOM":
      return {
        ...state,
        random: action.data,
      };
    case "TOGGLE_PLAYING":
      return {
        ...state,
        playing: action.data,
      };
    default:
      return state;
  }
};

export default PlayerReducer;
