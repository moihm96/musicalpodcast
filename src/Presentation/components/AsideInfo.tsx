import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Podcast } from "src/Domain/Model/Podcast";
import { usePodcastsStore } from "../store/podcasts";

interface AsideProps {
  podcastId: string | undefined;
}
export const AsideInfo = (props: AsideProps) => {
  const { podcasts } = usePodcastsStore();
  const [podcastSelected, setPodcastSelected] = useState<Podcast>();

  const { podcastId } = props;

  useEffect(() => {
    const selectedPodcast = podcasts.filter((item) => item.id.id === podcastId);
    setPodcastSelected(selectedPodcast[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [podcasts, podcastId]);

  return (
    <aside className="basis-1/5 " key={podcastId}>
      <div className="border border-1 border-gray-300 shadow-md px-4 py-5 mb-5 rounded">
        <div className="flex flex-col items-center relative ">
          <Link to={`/podcast/${podcastId}`}>
            {podcastSelected && (
              <img
                src={podcastSelected?.image[2].label}
                width={200}
                height={200}
                alt=""
                className="border border-1 rounded"
              />
            )}
          </Link>
          <hr className="border-b-0 border-solid mt-5 mb-6 w-full " />
          <div className="flex items-left flex-col">
            <header>
              <h2 className="font-bold">
                {podcastSelected && podcastSelected.name}
              </h2>
              <small className="text-sm italic">
                by: {podcastSelected && podcastSelected.artist?.label}
              </small>
            </header>
            <hr className="border-b-0 border-solid mt-4 mb-6 w-full " />
            <h3 className="font-bold h3 mb-1">Description:</h3>
            <p className="italic text-sm text-gray-600 break-all">
              {podcastSelected && podcastSelected.summary}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
