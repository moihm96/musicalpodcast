import { Outlet, useParams } from "react-router-dom";
import { AsideInfo } from "../Podcast/PodcastDetail/AsideInfo";

export const EpisodeLayout = () => {
  const params = useParams();

  const { podcastId } = params;

  return (
    <div className="flex flex-row align-top justify-between p-4">
      <AsideInfo podcastId={podcastId} />
      <Outlet />
    </div>
  );
};
