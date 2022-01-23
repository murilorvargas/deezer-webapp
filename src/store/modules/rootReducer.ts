import { combineReducers } from 'redux';

import favorites from './favorites/reducer'
import deezerTracks from './deezerTracks/reducer'

export default combineReducers({
  favorites,
  deezerTracks,
})