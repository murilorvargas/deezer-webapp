import { ITrack } from "./types";

export function setFavoritesTracksRequest() {
  return {
    type: 'SET_FAVORITES_TRACKS_REQUEST',
  }
}

export function setFavoritesTracksSuccess(data: ITrack[]) {
  return {
    type: 'SET_FAVORITES_TRACKS_SUCCESS',
    payload: {
      data
    }
  }
}

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

export function removeTrackFromFavoritesRequest(track: ITrack) {
  return {
    type: 'REMOVE_TRACK_FROM_FAVORITES_REQUEST',
    payload: {
      track
    }
  }
}

export function removeTrackFromFavoritesSuccess(track: ITrack) {
  return {
    type: 'REMOVE_TRACK_FROM_FAVORITES_SUCCESS',
    payload: {
      track
    }
  }
}

export function removeTrackFromFavoritesFailure() {
  return {
    type: 'REMOVE_TRACK_FROM_FAVORITES_FAILURE',
  }
}