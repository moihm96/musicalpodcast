import { PodcastDetail } from "src/Domain/Model/PodcastDetail";
import { PodcastRepository } from "src/Domain/Repository/PodcastRepository";

export interface GetPodcastUseCase {
  invoke: (id: string) => Promise<PodcastDetail[]>;
}

class GetPodcast implements GetPodcast {
  private podcastRepo: PodcastRepository;
  constructor(_podcastRepo: PodcastRepository) {
    this.podcastRepo = _podcastRepo;
  }

  async invoke(id: string) {
    return this.podcastRepo.getPodcast(id);
  }
}
export default GetPodcast;
