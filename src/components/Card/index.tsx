import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RiPlayFill, RiPauseFill } from 'react-icons/ri'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { TiArrowForward } from 'react-icons/ti'

import { useWidth } from '../../hooks/useWidth'
import { addTrackToFavoritesRequest, removeTrackFromFavoritesRequest } from '../../store/modules/favorites/actions'

import { Container } from './styles'

import { ITrack } from '../../store/modules/types'

interface CardProps {
  track: ITrack;
}

const Card: React.FC<CardProps> = ({ track }) => {
  let windowWidth = useWidth()

  const [audio, setAudio] = useState<HTMLAudioElement>()
  const [audioState, setAudioState] = useState(false)
  useEffect(() => {
    setAudio(new Audio(track.preview))
  }, [])

  const dispatch = useDispatch()

  const handleRemoveTrackFromFavorites = useCallback(() => {
    dispatch(removeTrackFromFavoritesRequest(track))
  }, [dispatch, track])

  const handleAddTrackToFavorites = useCallback(() => {
    dispatch(addTrackToFavoritesRequest(track))
  }, [dispatch, track])

  
  const handlePlayTrack = () => {
    if (!audioState) {
      audio.play()
      setAudioState(true)
      audio.addEventListener('ended', () => setAudioState(false));
      return () => {
        audio.removeEventListener('ended', () => setAudioState(false));
      };
    }
    
    if(audioState) {
      audio.pause()
      setAudioState(false)
    }
  }

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
        {windowWidth < 768 ? (
          <div>
            <button type="button" onClick={track.favorite ? handleRemoveTrackFromFavorites : handleAddTrackToFavorites}>{ track.favorite ? <AiFillStar /> : <AiOutlineStar /> }</button>
            <a rel="noopener noreferrer" href={track.link} target="_blank"><TiArrowForward /></a>
          </div>
        ) : (
        <>
          <span>{new Date(track.duration * 1000).toISOString().substr(14, 5)}</span>
          <div>
            <button type="button"onClick={handlePlayTrack}>{!audioState ? <RiPlayFill /> : <RiPauseFill/>}</button>
            <button type="button" onClick={track.favorite ? handleRemoveTrackFromFavorites : handleAddTrackToFavorites}>{ track.favorite ? <AiFillStar /> : <AiOutlineStar /> }</button>
            <a rel="noopener noreferrer" href={track.link} target="_blank"><TiArrowForward /></a>
          </div>
        </>
      )}
      </div>
    </Container>
  );
}

export default Card;