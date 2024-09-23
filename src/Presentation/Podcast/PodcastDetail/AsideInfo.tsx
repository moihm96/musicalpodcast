import React from "react";
import { Link } from "react-router-dom";
interface AsideProps {
  podcastId: string | undefined;
  title: string;
  author: string;
  description: string;
  image: string;
}
export const AsideInfo = (props: AsideProps) => {
  const { podcastId, image, author, title, description } = props;
  return (
    <aside className="basis-[20%] " key={podcastId}>
      <div className="border border-1 border-gray-300 shadow-md px-4 py-5 mb-5 rounded">
        <div className="flex flex-col items-center relative ">
          <Link to={`/podcast/${podcastId}`}>
            <img
              src={image}
              width={200}
              height={200}
              alt=""
              className="border border-1 rounded"
            />
          </Link>
          <hr className="border-b-0 border-solid mt-5 mb-6 w-full " />
          <div className="flex items-left flex-col">
            <header>
              <h2 className="font-bold">{title}</h2>
              <small className="text-sm italic">by: {author}</small>
            </header>
            <hr className="border-b-0 border-solid mt-4 mb-6 w-full " />
            <h3 className="font-bold h3 mb-1">Description:</h3>
            <p className="italic text-sm text-gray-600 break-all">
              {description}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
