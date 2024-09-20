import { Podcast } from "@/Domain/Model/Podcast";

export default interface PodcastDataSource {
  getPodcasts(): Promise<Podcast[]>;
}
