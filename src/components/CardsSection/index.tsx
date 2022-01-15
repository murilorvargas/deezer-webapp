import React from 'react'

import Card from '../Card';

import { Container } from './styles'

import { ITrack } from '../../store/modules/favorites/types';

interface CardsSectionProps {
  tracks: ITrack[];
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