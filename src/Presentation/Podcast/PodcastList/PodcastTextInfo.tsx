interface InfoProps {
  name: string;
  author?: string;
}

export const PodcastTextInfo = (props: InfoProps) => {
  const { name, author } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      <h4 className=" font-semibold text-center text-sm uppercase">{name}</h4>
      <h6 className="text-xs text-gray-500 text-center">
        Author: {author ? author : ""}
      </h6>
    </div>
  );
};
