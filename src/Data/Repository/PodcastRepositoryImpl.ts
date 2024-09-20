import { PodcastRepository } from "@/Domain/Repository/PodcastRepository";
import PodcastDataSource from "../DataSource/PodcastDataSource";
import { Podcast } from "@/Domain/Model/Podcast";
export class PodcastRepositoryImpl implements PodcastRepository {
  dataSource: PodcastDataSource;

  constructor(_datasource: PodcastDataSource) {
    this.dataSource = _datasource;
  }

  async getPodcasts(): Promise<Podcast[]> {
    return this.dataSource.getPodcasts();
  }
}
