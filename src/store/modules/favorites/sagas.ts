import { all, takeLatest,call, put } from 'redux-saga/effects'

import { addTrackToFavoritesFailure, addTrackToFavoritesRequest, addTrackToFavoritesSuccess } from './actions'
import api from '../../../services/api'

type AddTrackToDatabaseRequest = ReturnType<typeof addTrackToFavoritesRequest>

function* addTrackToDatabase({ payload }: AddTrackToDatabaseRequest) {
  const { track } = payload
  const response = yield call(api.post, '/api/favorites', { track: { ...track, favorite: true}})
  const status = response.status
  console.log(`${status} código`)

  if (status === 201) {
    yield put(addTrackToFavoritesSuccess(track))
  }

  if (status === 501) {
    yield put(addTrackToFavoritesFailure())
  }
}

export default all([
  takeLatest('ADD_TRACK_TO_FAVORITES_REQUEST', addTrackToDatabase)
])