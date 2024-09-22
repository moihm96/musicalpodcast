import { Podcast } from "src/Domain/Model/Podcast";
import { PodcastDetail } from "src/Domain/Model/PodcastDetail";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
  getPodcast(id: string): Promise<PodcastDetail[]>;
}
