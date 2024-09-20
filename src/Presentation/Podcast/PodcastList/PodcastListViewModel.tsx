import PodcastAPIDataSourceImpl from "../../../Data/DataSource/API/PodcastAPIDataSourceImpl";
import { PodcastRepositoryImpl } from "../../../Data/Repository/PodcastRepositoryImpl";
import { Podcast } from "../../../Domain/Model/Podcast";
import GetPodcasts from "../../../Domain//UseCases/Podcast/GetPodcasts";
import { useState } from "react";

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
