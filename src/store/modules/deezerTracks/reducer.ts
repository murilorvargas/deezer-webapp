import produce from "immer";
import { HYDRATE } from "next-redux-wrapper";
import { Reducer } from "redux";
import { ActionTypes, IPlaylistState } from "../types";

const INITIAL_STATE: IPlaylistState = {
  tracks: []
}

const deezerTracks: Reducer<IPlaylistState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case HYDRATE: {
        return {  ...draft, ...action.payload.deezerTracks}
      }
      case ActionTypes.setTracks: {
        const { data } = action.payload
        draft.tracks.push(...data)
        break
      }
      case ActionTypes.handleDeezerFavoritesTracks: {
        const { id } = action.payload
        const track = draft.tracks.find(track => track.id === id)
        if (track)
          track.favorite = !track.favorite
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default deezerTracks