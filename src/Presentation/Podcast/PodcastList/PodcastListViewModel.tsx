import { useState } from "react";
import PodcastAPIDataSourceImpl from "src/Data/DataSource/API/PodcastAPIDataSourceImpl";
import { PodcastRepositoryImpl } from "src/Data/Repository/PodcastRepositoryImpl";
import { Podcast } from "src/Domain/Model/Podcast";
import GetPodcasts from "src/Domain/UseCases/Podcast/GetPodcasts";

export default function PodcastListViewModel() {
  const [podcasts, setpodcasts] = useState<Podcast[]>([]);

  const podcastDataSourceImpl = new PodcastAPIDataSourceImpl();

  const podcastRepositoryImpl = new PodcastRepositoryImpl(
    podcastDataSourceImpl
  );

  const getPodcastUseCase = new GetPodcasts(podcastRepositoryImpl);

  async function getPodcasts() {
    setpodcasts(await getPodcastUseCase.invoke());
  }

  return {
    getPodcasts,
    podcasts,
  };
}
