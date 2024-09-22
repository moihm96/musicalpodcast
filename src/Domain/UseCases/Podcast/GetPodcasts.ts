import { Podcast } from "src/Domain/Model/Podcast";
import { PodcastRepository } from "src/Domain/Repository/PodcastRepository";

export interface GetPodcastUseCase {
  invoke: () => Promise<Podcast[]>;
}

class GetPodcasts implements GetPodcastUseCase {
  private podcastRepo: PodcastRepository;
  constructor(_podcastRepo: PodcastRepository) {
    this.podcastRepo = _podcastRepo;
  }

  async invoke() {
    return this.podcastRepo.getPodcasts();
  }
}

export default GetPodcasts;
