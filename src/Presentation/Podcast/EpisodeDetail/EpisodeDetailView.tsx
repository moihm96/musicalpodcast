import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PodcastDetail } from "src/Domain/Model/PodcastDetail";
import { usePodcastsStore } from "src/Presentation/store/podcasts";

export const EpisodeDetailView = () => {
  const [episode, setEpisode] = useState<PodcastDetail>();

  const params = useParams();

  const { podcastId, episodeId } = params;

  const { podcastDetails, fetchPodcast } = usePodcastsStore();

  useEffect(() => {
    podcastId && fetchPodcast(podcastId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const episodeDetail = podcastDetails.filter(
      (item) => item.id === episodeId
    );
    episodeDetail && setEpisode(episodeDetail[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcastDetails, episodeId]);

  const hasHTML = episode?.description && /\n/i.test(episode?.description);
  let newDescription: string | undefined = "";

  if (hasHTML) {
    newDescription =
      episode?.description && episode?.description.replaceAll("\n", "<br />");
  }

  const descriptionContent = hasHTML ? (
    <div
      className="italic text-sm text-gray-600"
      dangerouslySetInnerHTML={{ __html: newDescription ? newDescription : "" }}
    />
  ) : (
    <p className="italic text-sm text-gray-600">
      {episode?.description && episode?.description}
    </p>
  );

  return (
    <div className="basis-[70%]">
      <article className="border p-5">
        <h2 className="text-lg mb-2 font-bold">{episode?.title}</h2>
        {descriptionContent}
        {episode?.mediaType === "audio" && (
          <audio src={episode?.episodeUrl} controls className="w-full mt-7" />
        )}
      </article>
    </div>
  );
};
