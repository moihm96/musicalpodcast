import { Podcast } from "src/Domain/Model/Podcast";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
}
