import { createStore } from 'redux'

import rootReducer from './modules/rootReducer'

import { IPlaylistState } from './modules/favorites/types'

export interface IState {
  favorites: IPlaylistState
}

const store = createStore(rootReducer)

export default store