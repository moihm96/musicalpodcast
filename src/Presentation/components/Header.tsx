import { Link } from "react-router-dom";
import { usePodcastsStore } from "../store/podcasts";

export const Header = () => {
  const { loading } = usePodcastsStore();

  return (
    <header className="border-b border-gray-300 p-4 mb-5 flex justify-between">
      <h1>
        <Link to="/" className="text-blue-500 font-bold">
          Podcaster
        </Link>
      </h1>
      {loading && (
        <div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce " />
        </div>
      )}
    </header>
  );
};
