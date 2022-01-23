import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

import { IPlaylistState } from './modules/types'

export interface IState {
  favorites: IPlaylistState,
  deezerTracks: IPlaylistState,
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]

  const store = createStore(rootReducer, applyMiddleware(...middlewares))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore)