import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';

import api from '../services/api'
import { getDataFromDatabase } from '../utils/getDataFromDatabase';
import { IState, wrapper } from '../store';
import { setTracks } from '../store/modules/deezerTracks/actions';

import SideBar from '../components/SideBar'
import CardsSection from '../components/CardsSection'

import { ITrack } from '../store/modules/types'

import { Container } from '../styles/pages/Home'

export default function Home() {
  const tracks = useSelector<IState, ITrack[]>(state => state.deezerTracks.tracks)

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <SideBar />
        <CardsSection tracks={tracks}/>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( store => async (ctx: GetServerSidePropsContext) => {
  const data = await getDataFromDatabase(ctx)
  const res = await api.get('https://api.deezer.com/playlist/3155776842/&limit=50').then(response => response.data)

  const tracks = res.tracks.data.map(track => {
    return {
      id: Number(track.id),
      title: track.title_short,
      duration: track.duration,
      preview: track.preview,
      artist: track.artist.name,
      album: track.album.cover,
      link: track.link,
      favorite: data.some(t => t.id === track.id),
    }
  })

  store.dispatch(setTracks(tracks))
  store.dispatch(END);
  await store.sagaTask.toPromise();

  return {
    props: {}
  }
})