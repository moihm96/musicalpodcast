import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastListView from "../Podcast/PodcastList/PodcastListView";
import { AppLayout } from "../layouts/AppLayout";
import { PodcastDetailView } from "../Podcast/PodcastDetail/PodcastDetailView";
import { EpisodeLayout } from "../layouts/EpisodeLayout";
import { EpisodeDetailView } from "../Podcast/EpisodeDetail/EpisodeDetailView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PodcastListView />} />
          <Route element={<EpisodeLayout />}>
            <Route path="/podcast/:podcastId" element={<PodcastDetailView />} />
            <Route
              path="/podcast/:podcastId/episode/:episodeId"
              element={<EpisodeDetailView />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
