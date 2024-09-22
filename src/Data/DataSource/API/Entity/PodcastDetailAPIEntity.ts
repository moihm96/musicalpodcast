export interface PodcastDetailAPIEntity {
  resultCount: number;
  results: any[];
}
export interface Result {
  artistId?: number;
  artistIds?: number[];
  artistName?: string;
  artistViewUrl: string;
  artworkUrl100?: string;
  artworkUrl160?: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl600: string;
  closedCaptioning?: string;
  collectionCensoredName?: string;
  collectionExplicitness?: string;
  collectionHdPrice?: number;
  collectionId: number;
  collectionName: string;
  collectionPrice?: number;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  currency?: string;
  description?: string;
  episodeContentType?: string;
  episodeFileExtension?: string;
  episodeGuid?: string;
  episodeUrl?: string;
  feedUrl: string;
  genreIds?: string[];
  genres: Array<string>;
  kind: string;
  previewUrl?: string;
  primaryGenreName?: string;
  releaseDate: Date;
  shortDescription?: string;
  trackCensoredName?: string;
  trackCount?: number;
  trackExplicitness?: string;
  trackId: number;
  trackName: string;
  trackPrice?: number;
  trackTimeMillis?: number;
  trackViewUrl: string;
  wrapperType: string;
}
