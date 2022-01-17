import { Reducer } from 'redux'
import produce from 'immer'
import { toast } from 'react-toastify'

import { IPlaylistState } from './types'

const INITIAL_STATE: IPlaylistState = {
  tracks: []
}

const favorites: Reducer<IPlaylistState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft =>{
    switch(action.type) {
      case 'SET_FAVORITES_TRACKS_SUCCESS': {
        while(draft.tracks.length) {
          draft.tracks.pop();
        }
        const { data } = action.payload
        draft.tracks.push(...data)
        break
      }
      case 'ADD_TRACK_TO_FAVORITES_SUCCESS': {
        const { track } = action.payload;
          draft.tracks.push(
            {
              ...track,
              favorite: true 
            }
          )
          break
      }
      case 'ADD_TRACK_TO_FAVORITES_FAILURE': {
        toast.error("Error!")
        break
      }
      case 'REMOVE_TRACK_FROM_FAVORITES_SUCCESS': {
        const { track } = action.payload;
        const trackIndex = draft.tracks.findIndex(t => t.id === track.id)
        draft.tracks.splice(trackIndex, 1)
        break
      }
      case 'REMOVE_TRACK_FROM_FAVORITES_FAILURE': {
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