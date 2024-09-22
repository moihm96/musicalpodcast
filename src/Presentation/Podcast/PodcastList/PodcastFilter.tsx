import { ChangeEvent } from "react";

interface filterProps {
  numberOfPodcasts: number;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const PodcastFilter = (props: filterProps) => {
  const { numberOfPodcasts, value, onChange } = props;
  return (
    <div className="flex flex-row justify-end items-center pr-4">
      <span className="bg-blue-600 rounded text-white w-8 text-center text-sm mr-2">
        {numberOfPodcasts}
      </span>
      <input
        type="text"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 rounded-md sm:text-sm focus:ring-1"
        value={value}
        onChange={onChange}
        placeholder="Filter podcast..."
      />
    </div>
  );
};
