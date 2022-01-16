import Head from 'next/head'
import { useSelector } from 'react-redux'

import CardsSection from '../components/CardsSection'
import SideBar from '../components/SideBar'

import { IState } from '../store'
import { ITrack } from '../store/modules/favorites/types'

import { Container } from '../styles/pages/Favorites'


export default function Favorites() {
  const favorites = useSelector<IState, ITrack[]>(state => state.favorites.tracks)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <SideBar />
        <CardsSection tracks={favorites}/>
      </Container>
    </>
  )
}