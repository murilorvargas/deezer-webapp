import { Reducer } from 'redux'
import produce from 'immer'
import { toast } from 'react-toastify'

import { ActionTypes, IPlaylistState } from './types'

const INITIAL_STATE: IPlaylistState = {
  tracks: []
}

const favorites: Reducer<IPlaylistState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft =>{
    switch(action.type) {
      case ActionTypes.setFavoritesTracksSuccess: {
        while(draft.tracks.length) {
          draft.tracks.pop();
        }
        const { data } = action.payload
        draft.tracks.push(...data)
        break
      }
      case ActionTypes.addTrackToFavoritesSuccess: {
        const { track } = action.payload;
          draft.tracks.push(
            {
              ...track,
              favorite: true 
            }
          )
          break
      }
      case ActionTypes.addTrackToFavoritesFailure: {
        toast.error("Error!")
        break
      }
      case ActionTypes.removeTrackFromFavoritesSuccess: {
        const { track } = action.payload;
        const trackIndex = draft.tracks.findIndex(t => t.id === track.id)
        draft.tracks.splice(trackIndex, 1)
        break
      }
      case ActionTypes.removeTrackFromFavoritesFailure: {
        toast.error("Error!")
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default favorites