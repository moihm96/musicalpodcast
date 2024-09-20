export interface PodcastResponse {
  feed: {
    entry: PodcastAPIEntity[];
  };
}
export interface PodcastAPIEntity {
  "im:name": Label;
  "im:image": Images[];
  summary: Label;
  "im:price": Price;
  "im:contentType": ContentType;
  rigths?: { label?: string };
  title: Label;
  link: Link;
  id: Id;
  "im:artist": Artist;
  category: Category;
  "im:releaseDate": ReleaseDate;
}

type Images = {
  label: string;
  attributes: {
    height: number;
  };
};
type Price = {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
};

type ContentType = {
  attributes: {
    term: string;
    label: string;
  };
};
type Label = {
  label: string;
};
type Link = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

type Id = {
  label: string;
  attributes: {
    "im:id": string;
  };
};

type Artist = {
  label: string;
  atrributes: {
    href: string;
  };
};

type Category = {
  attributes: {
    "im:id": string;
    term: string;
    scheme: string;
    label: string;
  };
};

type ReleaseDate = {
  label: string;
  attributes: {
    label: string;
  };
};
