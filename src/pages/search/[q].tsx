import Head from 'next/head'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'

import { setFavoritesTracksRequest } from '../../store/modules/favorites/actions'
import { IState, wrapper } from '../../store'

import CardsSection from '../../components/CardsSection'
import SideBar from '../../components/SideBar'

import { ITrack } from '../../store/modules/types'

import { Container } from '../../styles/pages/Favorites'
import { GetServerSidePropsContext } from 'next'
import { getDataFromDatabase } from '../../services/getDataFromDatabase'
import api from '../../services/api'
import { setTracks } from '../../store/modules/deezerTracks/actions'


export default function Search() {
  const tracks = useSelector<IState, ITrack[]>(state => state.deezerTracks.tracks)

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Container>
        <SideBar />
        <CardsSection tracks={tracks}/>
      </Container>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps( store => async (ctx: GetServerSidePropsContext) => {
  try {
    const { q } = ctx.params
    const data = await getDataFromDatabase(ctx)
    const res = await api.get(`https://api.deezer.com/search?q=${q}`).then(response => response.data)
  
    const tracks = res.data.map(track => {
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
  } catch (error) {
    console.log(error)
  }

  return {
    props: {}
  }
});