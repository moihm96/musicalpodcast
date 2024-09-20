import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-4">
      <Link to={"/"}>
        <h2 className="font-semibold text-lg text-blue-600 capitalize border-gray-150 border-b-2">
          Podcaster
        </h2>
      </Link>
    </header>
  );
};
