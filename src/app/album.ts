import { Track } from './track'

export interface Album {
    name: String
    releaseDate: String
    coverImage: String
    tracks: Track[]
}
