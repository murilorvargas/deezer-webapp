import { all } from 'redux-saga/effects'

import favorites from './favorites/sagas'

export default function* rootSaga(): Generator {
  return yield all([
    favorites,
  ])
}