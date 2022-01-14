import React from 'react'

import Card from '../Card';

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

interface CardsSectionProps {
  tracks: Track[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ tracks }) => {
  return (
    <Container>
      {tracks.map(track =>(
        <Card key={track.id} track={track} />
      ))}
    </Container>
  );
}

export default CardsSection;