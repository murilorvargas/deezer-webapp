import Head from 'next/head'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'

import { setFavoritesTracksRequest } from '../store/modules/favorites/actions'
import { IState, wrapper } from '../store'

import CardsSection from '../components/CardsSection'
import Sidebar from '../components/Sidebar'

import { ITrack } from '../store/modules/types'

import { Container } from '../styles/pages/Favorites'
import { GetServerSidePropsContext } from 'next'


export default function Favorites() {
  const favorites = useSelector<IState, ITrack[]>(state => state.favorites.tracks)

  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>
      <Container>
        <Sidebar />
        <CardsSection tracks={favorites}/>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( store => async (ctx: GetServerSidePropsContext) => {
  store.dispatch(setFavoritesTracksRequest(ctx));
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return {
    props: {}
  }
});