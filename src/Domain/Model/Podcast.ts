export interface Podcast {
  name: string;
  image: Images[];
  summary: string;
  title: string;
  id: Id;
  artist?: Artist;
}

type Images = {
  label?: string;
  height: number;
};

type Id = {
  label?: string;
  id: string;
};

type Artist = {
  label?: string;
  href: string;
};
