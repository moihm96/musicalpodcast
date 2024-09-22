import { useState } from "react";
import PodcastAPIDataSourceImpl from "src/Data/DataSource/API/PodcastAPIDataSourceImpl";
import { PodcastRepositoryImpl } from "src/Data/Repository/PodcastRepositoryImpl";
import { Podcast } from "src/Domain/Model/Podcast";
import { PodcastDetail } from "src/Domain/Model/PodcastDetail";
import GetPodcast from "src/Domain/UseCases/Podcast/GetPodcast";
import GetPodcasts from "src/Domain/UseCases/Podcast/GetPodcasts";

export default function PodcastListViewModel() {
  const [podcasts, setpodcasts] = useState<Podcast[]>([]);
  const [podcastDetail, setpodcastDetail] = useState<PodcastDetail[]>([]);

  const podcastDataSourceImpl = new PodcastAPIDataSourceImpl();

  const podcastRepositoryImpl = new PodcastRepositoryImpl(
    podcastDataSourceImpl
  );

  const getPodcastUseCase = new GetPodcasts(podcastRepositoryImpl);

  const getPodcastDetailUseCase = new GetPodcast(podcastRepositoryImpl);

  async function getPodcasts() {
    setpodcasts(await getPodcastUseCase.invoke());
  }

  async function getPodcast(id: string) {
    setpodcastDetail(await getPodcastDetailUseCase.invoke(id));
  }

  return {
    getPodcasts,
    podcasts,
    getPodcast,
    podcastDetail,
  };
}
