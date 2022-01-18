import { ActionTypes, ITrack } from "./types";

export function setFavoritesTracksRequest(ctx) {
  return {
    type: ActionTypes.setFavoritesTracksRequest,
    payload: {
      ctx
    }
  }
}

export function setFavoritesTracksSuccess(data: ITrack[]) {
  return {
    type: ActionTypes.setFavoritesTracksSuccess,
    payload: {
      data
    }
  }
}

export function addTrackToFavoritesRequest(track: ITrack) {
  return {
    type: ActionTypes.addTrackToFavoritesRequest,
    payload: {
      track
    }
  }
}

export function addTrackToFavoritesSuccess(track: ITrack) {
  return {
    type: ActionTypes.addTrackToFavoritesSuccess,
    payload: {
      track
    }
  }
}

export function addTrackToFavoritesFailure() {
  return {
    type: ActionTypes.addTrackToFavoritesFailure,
  }
}

export function removeTrackFromFavoritesRequest(track: ITrack) {
  return {
    type: ActionTypes.removeTrackFromFavoritesRequest,
    payload: {
      track
    }
  }
}

export function removeTrackFromFavoritesSuccess(track: ITrack) {
  return {
    type: ActionTypes.removeTrackFromFavoritesSuccess,
    payload: {
      track
    }
  }
}

export function removeTrackFromFavoritesFailure() {
  return {
    type: ActionTypes.removeTrackFromFavoritesFailure,
  }
}