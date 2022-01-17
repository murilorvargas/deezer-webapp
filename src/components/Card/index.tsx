import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { TiArrowForward } from 'react-icons/ti'

import { addTrackToFavoritesRequest, removeTrackFromFavoritesRequest } from '../../store/modules/favorites/actions'

import { Container } from './styles'

import { ITrack } from '../../store/modules/favorites/types'

interface CardProps {
  track: ITrack;
}

const Card: React.FC<CardProps> = ({ track }) => {
  const dispatch = useDispatch()

  const handleRemoveTrackFromFavorites = useCallback(() => {
    dispatch(removeTrackFromFavoritesRequest(track))
  }, [dispatch, track])

  const handleAddTrackToFavorites = useCallback(() => {
    dispatch(addTrackToFavoritesRequest(track))
  }, [dispatch, track])

  return (
    <Container>
      <div>
        <img src={track.album} alt="Album" />
        <div>
          <strong>{track.title}</strong>
          <span>{track.artist}</span>
        </div>
      </div>
      <div>
        <span>{new Date(track.duration * 1000).toISOString().substr(14, 5)}</span>
        <div>
          <button type="button" onClick={track.favorite ? handleRemoveTrackFromFavorites : handleAddTrackToFavorites}>{ track.favorite ? <AiFillStar /> : <AiOutlineStar /> }</button>
          <a rel="noopener noreferrer" href={track.link} target="_blank"><TiArrowForward /></a>
        </div>
      </div>
    </Container>
  );
}

export default Card;