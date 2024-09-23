import {
  getLocalStorageExpiration,
  setLocalStorageExpiration,
} from "src/Core/utils/localStorageExpiration";
import PodcastAPIDataSourceImpl from "src/Data/DataSource/API/PodcastAPIDataSourceImpl";
import { PodcastRepositoryImpl } from "src/Data/Repository/PodcastRepositoryImpl";
import { Podcast } from "src/Domain/Model/Podcast";
import { PodcastDetail } from "src/Domain/Model/PodcastDetail";
import GetPodcast from "src/Domain/UseCases/Podcast/GetPodcast";
import GetPodcasts from "src/Domain/UseCases/Podcast/GetPodcasts";
import { create } from "zustand";

interface State {
  loading: boolean;
  podcasts: Podcast[];
  podcastDetails: PodcastDetail[];
  fetchPodcasts: () => Promise<void>;
  fetchPodcast: (id: string) => Promise<void>;
}

const podcastDataSourceImpl = new PodcastAPIDataSourceImpl();

const podcastRepositoryImpl = new PodcastRepositoryImpl(podcastDataSourceImpl);

const getPodcastUseCase = new GetPodcasts(podcastRepositoryImpl);

const getPodcastDetailUseCase = new GetPodcast(podcastRepositoryImpl);

export const usePodcastsStore = create<State>((set) => {
  const podcastsValue = getLocalStorageExpiration("podcasts");
  const podcastsParser = podcastsValue !== null && JSON.parse(podcastsValue);
  return {
    podcasts: podcastsParser ? JSON.parse(podcastsParser.value) : [],
    loading: false,
    fetchPodcasts: async () => {
      set({ loading: true });
      if (podcastsValue !== null) {
        set({ podcasts: JSON.parse(podcastsParser.value) });
      } else {
        const data = await getPodcastUseCase.invoke();
        setLocalStorageExpiration("podcasts", JSON.stringify(data), 1);
        set({ podcasts: data });
      }
      set({ loading: false });
    },
    podcastDetails: [],
    fetchPodcast: async (id) => {
      set({ loading: true });
      const podcastsDetailValue = getLocalStorageExpiration(id);
      const podcastsDetailParser =
        podcastsDetailValue !== null && JSON.parse(podcastsDetailValue);

      if (podcastsDetailValue !== null) {
        set({ podcastDetails: JSON.parse(podcastsDetailParser.value) });
      } else {
        const data = await getPodcastDetailUseCase.invoke(id);
        setLocalStorageExpiration(id, JSON.stringify(data), 1);
        set({ podcastDetails: data });
      }
      set({ loading: false });
    },
  };
});
