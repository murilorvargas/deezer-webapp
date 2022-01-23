import { ActionTypes, ITrack } from "../types";


export function setTracks(data: ITrack[]) {
  return {
    type: ActionTypes.setTracks,
    payload: {
      data
    }
  }
}

export function handleDeezerFavoritesTracks(id: number) {
  return {
    type: ActionTypes.handleDeezerFavoritesTracks,
    payload: {
      id
    }
  }
}