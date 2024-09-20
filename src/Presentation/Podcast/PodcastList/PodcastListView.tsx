import { useEffect } from "react";
import useViewModel from "./PodcastListViewModel";

export default function PodcastListView() {
  const { podcasts, getPodcasts } = useViewModel();
  useEffect(() => {
    getPodcasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full grid grid-cols-4 place-items-center">
      {podcasts.map((podcast) => (
        <div
          className="h-52 w-11/12 m-4 flex flex-col gap-4 items-center shadow-lg"
          key={podcast.name}
        >
          <img
            className=" w-20 h-20 rounded-full"
            src={podcast.image[2].label}
            alt={podcast.name}
          ></img>
          <div className="flex flex-col items-center gap-4">
            <h4 className=" font-semibold text-center text-sm uppercase">
              {podcast.name}
            </h4>
            <h6 className="text-xs text-gray-500 text-center">
              Author: {podcast.artist?.label}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
}
