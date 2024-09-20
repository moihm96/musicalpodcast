import { ChangeEvent, useEffect, useState } from "react";
import useViewModel from "./PodcastListViewModel";

export default function PodcastListView() {
  const { podcasts, getPodcasts } = useViewModel();
  const [searchItem, setSearchItem] = useState("");
  const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    setSearchItem(searchTerm);

    const filteredItems = podcasts.filter(
      (podcast) =>
        podcast.artist?.label
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        podcast.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        podcast.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPodcasts(filteredItems);
  };

  useEffect(() => {
    getPodcasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  return (
    <div className="w-full grid">
      <div className="justify-self-end flex flex-row justify-center items-center">
        <div className=" rounded-lg max-h-6 min-w-5 p-1 text-center bg-blue-500 text-white flex justify-center items-center">
          {podcasts.length}
        </div>
        <input
          type="text"
          className="m-2 p-2 min-w-80  border-2 border-gray-200"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Filter podcasts..."
        />
      </div>

      <div className="w-full grid grid-cols-4 place-items-center">
        {filteredPodcasts.map((podcast) => (
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
    </div>
  );
}
