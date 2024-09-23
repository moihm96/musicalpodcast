import { useParams } from "react-router-dom";
import { PodcastEpisodesTable } from "./PodcastEpisodesTable";

export const PodcastDetailView = () => {
  const params = useParams();

  const { podcastId } = params;
  return podcastId ? (
    <PodcastEpisodesTable podcastId={podcastId} />
  ) : (
    <div>There is no podcast for this ID</div>
  );
};
