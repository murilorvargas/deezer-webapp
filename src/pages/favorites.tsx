import Head from 'next/head'

import SideBar from '../components/SideBar'

import { Container } from '../styles/pages/Favorites'


export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favoritas</title>
      </Head>
      <Container>
        <SideBar />
      </Container>
    </>
  )
}