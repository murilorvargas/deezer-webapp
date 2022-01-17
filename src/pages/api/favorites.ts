import { NextApiRequest, NextApiResponse } from 'next'
import { parseCookies, setCookie } from 'nookies'
import { v4 as uuidV4 } from 'uuid'
import { database } from '../../services/firebase';
import { set, ref, child, get, remove } from 'firebase/database';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { track } = req.body;
    const { ['web-app_deezer.uuid']: userUuid } = parseCookies({ req })

    if (userUuid) {
      return set(ref(database, `users/${userUuid}/tracks/${track.id}`), track)
      .then(() => {
        return res.status(201).json({ success: true });
      })
      .catch(err =>
        res
          .status(501)
          .json({ error: `Sorry something Happened! ${err.message}` })
      );
    }

    if (!userUuid) {
      const userUuid = uuidV4()
      setCookie({ res }, 'web-app_deezer.uuid', userUuid, {
        path: '/',
        sameSite: "strict"
      })
    
      return set(ref(database, `users/${userUuid}/tracks/${track.id}`), track)
      .then(() => {
        return res.status(201).json({ success: true });
      })
      .catch(err =>
        res
          .status(501)
          .json({ error: `Sorry something Happened! ${err.message}` })
      );
    }
  }

  if (req.method === 'GET') {
    const { ['web-app_deezer.uuid']: userUuid } = parseCookies({ req })
    const dbRef = ref(database)

    return get(child(dbRef, `users/${userUuid}/tracks`))
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
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
  }
}