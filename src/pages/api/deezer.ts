import { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/api";
import { getDataFromDatabase } from "../../services/getDataFromDatabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if(req.method === "GET") {
      try {
        const { search } = req.body
    
        const data = await getDataFromDatabase(req)
        const res = await api.get(`https://api.deezer.com/search?q="${search}"`).then(response => response.data)
    
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
        return res.status(201).json(tracks);
      } catch (error) {
        console.log(error)
        res.status(501).json({ error })
      }
    } 
}