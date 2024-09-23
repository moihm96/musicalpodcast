import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastListView from "../Podcast/PodcastList/PodcastListView";
import { AppLayout } from "../layouts/AppLayout";
import { PodcastDetailView } from "../Podcast/PodcastDetail/PodcastDetailView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PodcastListView />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
