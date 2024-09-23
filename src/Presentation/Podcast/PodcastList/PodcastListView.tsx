import { ChangeEvent, useEffect, useState } from "react";
import { PodcastTextInfo } from "./PodcastTextInfo";
import { PodcastFilter } from "./PodcastFilter";
import { Link } from "react-router-dom";
import { usePodcastsStore } from "src/Presentation/store/podcasts";

export default function PodcastListView() {
  const { podcasts, fetchPodcasts } = usePodcastsStore();
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
    fetchPodcasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredPodcasts(podcasts);
  }, [podcasts]);

  return (
    <div className="w-full grid">
      <PodcastFilter
        numberOfPodcasts={
          filteredPodcasts.length >= 0 ? filteredPodcasts.length : 0
        }
        value={searchItem}
        onChange={handleInputChange}
      />

      <div className="w-full grid grid-cols-4 place-items-center">
        {filteredPodcasts.length > 0 &&
          filteredPodcasts.map((podcast) => (
            <Link
              className="h-52 w-11/12 m-4 flex flex-col gap-4 items-center shadow-lg"
              key={podcast.name}
              to={`/podcast/${podcast.id.id}`}
            >
              <img
                className=" w-20 h-20 rounded-full"
                src={podcast.image[2].label}
                alt={podcast.name}
              />
              <PodcastTextInfo
                name={podcast.name}
                author={podcast.artist?.label}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
