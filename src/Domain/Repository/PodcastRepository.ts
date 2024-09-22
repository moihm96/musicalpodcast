import { Podcast } from "../Model/Podcast";
import { PodcastDetail } from "../Model/PodcastDetail";

export interface PodcastRepository {
  getPodcasts(): Promise<Podcast[]>;
  getPodcast(id: string): Promise<PodcastDetail[]>;
}
