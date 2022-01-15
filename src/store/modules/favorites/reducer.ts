import { Reducer } from 'redux'
import produce from 'immer'

import { IPlaylistState } from './types'

const INITIAL_STATE: IPlaylistState = {
  tracks: []
}

const favorites: Reducer<IPlaylistState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft =>{
    switch(action.type) {
      case 'ADD_TRACK_TO_FAVORITES': {
        const { track } = action.payload;
          draft.tracks.push(
            {
              ...track,
              favorite: true 
            }
          )
          break
      }
      case 'REMOVE_TRACK_FROM_FAVORITES': {
        const { track } = action.payload;
        const trackIndex = draft.tracks.findIndex(t => t.id === track.id)
        draft.tracks.splice(trackIndex, 1)
        break
      }
      default: {
        return draft
      }
    }
  })
}

export default favorites