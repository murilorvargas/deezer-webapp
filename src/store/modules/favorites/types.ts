export enum ActionTypes {
  setFavoritesTracksRequest = 'SET_FAVORITES_TRACKS_REQUEST',
  setFavoritesTracksSuccess = 'SET_FAVORITES_TRACKS_SUCCESS',
  addTrackToFavoritesRequest = 'ADD_TRACK_TO_FAVORITES_REQUEST',
  addTrackToFavoritesSuccess = 'ADD_TRACK_TO_FAVORITES_SUCCESS',
  addTrackToFavoritesFailure = 'ADD_TRACK_TO_FAVORITES_FAILURE',
  removeTrackFromFavoritesRequest = 'REMOVE_TRACK_FROM_FAVORITES_REQUEST',
  removeTrackFromFavoritesSuccess = 'REMOVE_TRACK_FROM_FAVORITES_SUCCESS',
  removeTrackFromFavoritesFailure = 'REMOVE_TRACK_FROM_FAVORITES_FAILURE',
}

export interface ITrack {
  id: number
  title: string
  duration: number
  preview: string
  artist: string
  album: string
  link: string
  favorite: boolean
}

export interface IPlaylistState {
  tracks: ITrack[]
}