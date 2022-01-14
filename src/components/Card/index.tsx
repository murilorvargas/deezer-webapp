import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { TiArrowForward } from 'react-icons/ti'

import { Container } from './styles'

interface Track {
  id: number;
  title: string;
  duration: number;
  preview: string;
  artist: string;
  album: string;
  link: string;
}

interface CardProps {
  track: Track;
}

const Card: React.FC<CardProps> = ({ track }) => {
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
          <button type="button"><AiOutlineStar /></button>
          <a rel="noopener noreferrer" href={track.link} target="_blank"><TiArrowForward /></a>
        </div>
      </div>
    </Container>
  );
}

export default Card;