import { Podcast } from "src/Domain/Model/Podcast";
import { PodcastRepository } from "src/Domain/Repository/PodcastRepository";
import PodcastDataSource from "../DataSource/PodcastDataSource";

export class PodcastRepositoryImpl implements PodcastRepository {
  dataSource: PodcastDataSource;

  constructor(_datasource: PodcastDataSource) {
    this.dataSource = _datasource;
  }

  async getPodcasts(): Promise<Podcast[]> {
    return this.dataSource.getPodcasts();
  }
}
