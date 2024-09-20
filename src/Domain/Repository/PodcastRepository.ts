import { Podcast } from "../Model/Podcast";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
}
