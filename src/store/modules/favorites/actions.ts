import { ITrack } from "./types";

export function addTrackToFavorites(track: ITrack) {
  return {
    type: 'ADD_TRACK_TO_FAVORITES',
    payload: {
      track
    }
  }
}

export function removeTrackFromFavorites(track: ITrack) {
  return {
    type: 'REMOVE_TRACK_FROM_FAVORITES',
    payload: {
      track
    }
  }
}