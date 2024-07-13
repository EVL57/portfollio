export interface Album {
    id: number;
    image: string;
    name: string;
  }
  
  export interface Artist {
    id: number;
    name: string;
    image: string;
  }
  
  export interface ExternalIds {
    spotify: string[];
    appleMusic: string[];
  }
  
  export interface Track {
    albums: Album[];
    artists: Artist[];
    durationMs: number;
    explicit: boolean;
    externalIds: ExternalIds;
    id: number;
    name: string;
    spotifyPopularity: number;
    spotifyPreview: string | null;
    appleMusicPreview: string | null;
  }
  
  export interface TrackItem {
    position: number;
    streams: number;
    playedMs: number;
    indicator: string | null;
    track: Track;
  }
  
  export interface TrackResponse {
    items: TrackItem[];
  }