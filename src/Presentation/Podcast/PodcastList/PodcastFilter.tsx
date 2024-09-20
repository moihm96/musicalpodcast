import { ChangeEvent } from "react";

interface filterProps {
  numberOfPodcasts: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const PodcastFilter = (props: filterProps) => {
  const { numberOfPodcasts, value, onChange } = props;
  return (
    <div className="justify-self-end flex flex-row justify-center items-center">
      <div className=" rounded-lg max-h-6 min-w-5 p-1 text-center bg-blue-500 text-white flex justify-center items-center">
        {numberOfPodcasts}
      </div>
      <input
        type="text"
        className="m-2 p-2 min-w-80  border-2 border-gray-200"
        value={value}
        onChange={onChange}
        placeholder="Filter podcasts..."
      />
    </div>
  );
};
