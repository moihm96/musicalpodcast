export interface PodcastDetail {
  type: string;
  author?: string;
  episodes?: number;
  image: string;
  release: Date;
  title: string;
  duration?: number;
  description?: string;
  id?: string;
  mediaType?: string;
  episodeUrl?: string;
}
