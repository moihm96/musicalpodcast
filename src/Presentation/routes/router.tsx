import { BrowserRouter, Routes, Route } from "react-router-dom";
import PodcastListView from "../Podcast/PodcastList/PodcastListView";
import { AppLayout } from "../layouts/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PodcastListView />} />
          <Route path="/:podcastid" element={<PodcastListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
