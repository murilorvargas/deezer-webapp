export interface ITrack {
  id: number
  title: string
  duration: number
  preview: string
  artist: string
  album: string
  link: string
  favorite: boolean
}

export interface IPlaylistState {
  tracks: ITrack[]
}