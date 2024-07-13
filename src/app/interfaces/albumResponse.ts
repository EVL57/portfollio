export interface Artist {
    id: number;
    name: string;
    image: string;
  }
  
  export interface ExternalIds {
    upc: string | null;
    ean: string | null;
    isrc: string | null;
    spotify: string[];
    appleMusic: string[];
  }
  
  export interface Album {
    name: string;
    image: string;
    label: string;
    spotifyPopularity: number;
    totalTracks: number;
    releaseDate: number;
    genres: string[];
    artists: Artist[];
    externalIds: ExternalIds;
    type: string;
    id: number;
  }
  
  export interface AlbumItem {
    position: number;
    streams: number;
    playedMs: number;
    indicator: string | null;
    album: Album;
  }
  
  export interface AlbumResponse {
    items: AlbumItem[];
  }