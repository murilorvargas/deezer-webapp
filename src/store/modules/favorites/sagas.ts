import { all, takeLatest,call, put } from 'redux-saga/effects'

import { 
  setFavoritesTracksSuccess,
  addTrackToFavoritesFailure,
  addTrackToFavoritesRequest,
  addTrackToFavoritesSuccess,
  removeTrackFromFavoritesRequest,
  removeTrackFromFavoritesSuccess,
  removeTrackFromFavoritesFailure, 
  setFavoritesTracksRequest,
  setFavoritesTracksFailure} from './actions'
import api from '../../../services/api'
import { getDataFromDatabase } from '../../../utils/getDataFromDatabase';

import { ActionTypes } from '../types'
import { handleDeezerFavoritesTracks } from '../deezerTracks/actions';

type SetFavoritesTracksRequest = ReturnType<typeof setFavoritesTracksRequest>
type AddTrackToDatabaseRequest = ReturnType<typeof addTrackToFavoritesRequest>
type RemoveTrackFromDatabaseRequest = ReturnType<typeof removeTrackFromFavoritesRequest>

function* setFavoritesTracksFromDatabase({ payload }: SetFavoritesTracksRequest) {
  try {
    const data = yield getDataFromDatabase(payload.ctx)
    yield put(setFavoritesTracksSuccess(data))
  } catch (error) {
    console.log(error)
    yield put(setFavoritesTracksFailure())
  }
}

function* addTrackToDatabase({ payload }: AddTrackToDatabaseRequest) {
  try {
    const { track } = payload
    yield call(api.post, '/api/favorites', { track: { ...track, favorite: true}})
    yield put(handleDeezerFavoritesTracks(track.id))
    yield put(addTrackToFavoritesSuccess(track))
  } catch (error) {
    console.log(error)
    yield put(addTrackToFavoritesFailure())
  }
}

function* removeTrackFromDatabase({ payload }: RemoveTrackFromDatabaseRequest) {
  try {
    const { track } = payload
    yield call(api.delete, '/api/favorites', { data: { trackId: track.id } })
    yield put(handleDeezerFavoritesTracks(track.id))
    yield put(removeTrackFromFavoritesSuccess(track))
  } catch (error) {
    console.log(error)
    yield put(removeTrackFromFavoritesFailure())
  }
}

export default all([
  takeLatest(ActionTypes.removeTrackFromFavoritesRequest, removeTrackFromDatabase),
  takeLatest(ActionTypes.setFavoritesTracksRequest, setFavoritesTracksFromDatabase),
  takeLatest(ActionTypes.addTrackToFavoritesRequest, addTrackToDatabase)
])