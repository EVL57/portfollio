
export interface ExternalIds {
  spotify: string[];
  appleMusic: string[];
}

export interface Artist {
  externalIds: ExternalIds;
  followers: number;
  genres: string[];
  id: number;
  image: string;
  name: string;
  spotifyPopularity: number;
}

export interface Item {
  position: number;
  streams: number;
  playedMs: number;
  indicator: any; 
  artist: Artist;
}

export interface ArtistResponse{
  items: Item[];
}



