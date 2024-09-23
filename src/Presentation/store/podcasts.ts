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
  return {
    podcasts: [],
    loading: false,
    fetchPodcasts: async () => {
      set({ loading: true });
      const data = await getPodcastUseCase.invoke();
      set({ podcasts: data });
      set({ loading: false });
    },
    podcastDetails: [],
    fetchPodcast: async (id) => {
      set({ loading: true });
      const data = await getPodcastDetailUseCase.invoke(id);
      set({ podcastDetails: data });
      set({ loading: false });
    },
  };
});
