import { Podcast } from "src/Domain/Model/Podcast";
import PodcastDataSource from "../PodcastDataSource";
import { PodcastResponse } from "./Entity/PodcastAPIEntity";

const BASE_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcasts(): Promise<Podcast[]> {
    let response = await myFetch<PodcastResponse>(`${BASE_URL}`);
    let data = await response.json();

    const podcasts = data.feed.entry.map((item) => ({
      name: item["im:name"].label,
      image: item["im:image"].map((image) => ({
        label: image.label,
        height: image.attributes.height,
      })),
      summary: item.summary.label,
      title: item.title.label,
      id: {
        label: item.id.label,
        id: item.id.attributes["im:id"],
      },
      artist: {
        label: item["im:artist"].label ? item["im:artist"].label : "",
        href: item["im:artist"].atrributes
          ? item["im:artist"].atrributes.href
          : "",
      },
    }));

    return podcasts;
  }
}
