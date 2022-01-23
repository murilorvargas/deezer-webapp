import { database } from '../services/firebase';
import { ref, child, get } from 'firebase/database';
import { parseCookies } from 'nookies';

type FirebaseResponse = Record<string, {
  id: number
  title: string
  duration: number
  preview: string
  artist: string
  album: string
  link: string
  favorite: boolean
}>

const dbRef = ref(database)

const getDataFromDatabase = async (ctx) => {
  const { ['web-app_deezer.uuid']: userUuid } = parseCookies(ctx)

  const data = await get(child(dbRef, `users/${userUuid}/tracks`))
    .then(snapshot => {
      const response: FirebaseResponse = snapshot.val() ?? {}
      const data = Object.entries(response).map(([key, value]) => {
          return {
            album: value.album,
            artist: value.artist,
            duration: value.duration,
            favorite: value.favorite,
            id: Number(key),
            link: value.link,
            preview: value.preview,
            title: value.title,
          }
      })
      return data
    })
  return data
}

export { getDataFromDatabase }