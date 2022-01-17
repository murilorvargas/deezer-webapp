import { all, takeLatest,call, put } from 'redux-saga/effects'

import { setFavoritesTracksSuccess, addTrackToFavoritesFailure, addTrackToFavoritesRequest, addTrackToFavoritesSuccess, removeTrackFromFavoritesRequest, removeTrackFromFavoritesSuccess, removeTrackFromFavoritesFailure } from './actions'
import api from '../../../services/api'
import { ActionTypes } from './types'

type AddTrackToDatabaseRequest = ReturnType<typeof addTrackToFavoritesRequest>
type RemoveTrackFromDatabaseRequest = ReturnType<typeof removeTrackFromFavoritesRequest>

function* setFavoritesTracksFromDatabase(action) {
  const { data } = yield call(api.get, '/api/favorites')
  yield put(setFavoritesTracksSuccess(data))
}

function* addTrackToDatabase({ payload }: AddTrackToDatabaseRequest) {
  const { track } = payload
  const response = yield call(api.post, '/api/favorites', { track: { ...track, favorite: true}})
  const status = response.status

  if (status === 201) {
    yield put(addTrackToFavoritesSuccess(track))
  }

  if (status === 501) {
    yield put(addTrackToFavoritesFailure())
  }
}

function* removeTrackFromDatabase({ payload }: RemoveTrackFromDatabaseRequest) {
  const { track } = payload
  const response = yield call(api.delete, '/api/favorites', { data: { trackId: track.id } })
  const status = response.status

  if (status === 201) {
    yield put(removeTrackFromFavoritesSuccess(track))
  }

  if (status === 501) {
    yield put(removeTrackFromFavoritesFailure())
  }
}

export default all([
  takeLatest(ActionTypes.removeTrackFromFavoritesRequest, removeTrackFromDatabase),
  takeLatest(ActionTypes.setFavoritesTracksRequest, setFavoritesTracksFromDatabase),
  takeLatest(ActionTypes.addTrackToFavoritesRequest, addTrackToDatabase)
])