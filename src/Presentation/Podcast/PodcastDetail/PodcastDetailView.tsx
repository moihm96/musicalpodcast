import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { AsideInfo } from "./AsideInfo";
import { PodcastEpisodesView } from "./PodcastEpisodesView";

export const PodcastDetailView = () => {
  const params = useParams();
  const props = useLocation();

  const { podcastId } = params;

  const { description, image, author, title } = props.state;
  return (
    <div className="flex align-top justify-between p-4">
      <AsideInfo
        podcastId={podcastId}
        title={title}
        author={author}
        description={description}
        image={image}
      />
      {podcastId && <PodcastEpisodesView podcastId={podcastId} />}
    </div>
  );
};
