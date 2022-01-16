import Head from 'next/head'
import { GetStaticProps } from 'next'

import api from '../services/api'
import SideBar from '../components/SideBar'
import CardsSection from '../components/CardsSection'

import { Container } from '../styles/pages/Home'
import { IPlaylistState } from '../store/modules/favorites/types'

interface HomeProps {
  playlist: IPlaylistState;
}

export default function Home({ playlist }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <SideBar />
        <CardsSection tracks={playlist.tracks}/>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('https://api.deezer.com/playlist/3155776842').then(response => response.data)
  const tracks = response.tracks.data.map(track => {
    return {
      id: track.id,
      title: track.title_short,
      duration: track.duration,
      preview: track.preview,
      artist: track.artist.name,
      album: track.album.cover,
      link: track.link,
      favorite: false,
    }
  })

  const playlist = {
    tracks,
  }

  return {
    props: {
      playlist
    }
  }
}