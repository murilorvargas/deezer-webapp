import { ITrack } from "./types";

export function addTrackToFavoritesRequest(track: ITrack) {
  return {
    type: 'ADD_TRACK_TO_FAVORITES_REQUEST',
    payload: {
      track
    }
  }
}

export function addTrackToFavoritesSuccess(track: ITrack) {
  return {
    type: 'ADD_TRACK_TO_FAVORITES_SUCCESS',
    payload: {
      track
    }
  }
}

export function addTrackToFavoritesFailure() {
  return {
    type: 'ADD_TRACK_TO_FAVORITES_FAILURE',
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