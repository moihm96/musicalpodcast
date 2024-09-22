import { Podcast } from "src/Domain/Model/Podcast";
import PodcastDataSource from "../PodcastDataSource";
import { PodcastResponse } from "./Entity/PodcastAPIEntity";
import { PodcastDetail } from "src/Domain/Model/PodcastDetail";
import { PodcastDetailAPIEntity } from "./Entity/PodcastDetailAPIEntity";

const BASE_URL = "https://itunes.apple.com";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class PodcastAPIDataSourceImpl implements PodcastDataSource {
  async getPodcast(podcastId: string): Promise<PodcastDetail[]> {
    console.log("PodcastId: ", podcastId);

    const params = new URLSearchParams({
      id: podcastId,
      media: "podcast",
      entity: "podcastEpisode",
      limit: "",
    });
    let response = await myFetch<PodcastDetailAPIEntity>(
      `https://cors-anywhere.herokuapp.com/${BASE_URL}/lookup?${params}`
    );

    const data: PodcastDetailAPIEntity = await response.json();

    console.log("Data: ", data);

    const postcastDetail = data.results.map((detail) => {
      if (detail.wrapperType === "track") {
        return {
          type: detail.wrapperType,
          author: detail.artistName,
          episodes: detail.trackCount,
          image: detail.artworkUrl600,
          release: detail.releaseDate,
          title: detail.trackName,
          duration: detail.trackTimeMillis,
        };
      } else {
        return {
          type: detail.wrapperType,
          description: detail.description,
          image: detail.artworkUrl600,
          id: detail.episodeGuid,
          release: detail.releaseDate,
          title: detail.trackName,
          duration: detail.trackTimeMillis,
          mediaType: detail.episodeContentType,
          episodeUrl: detail.episodeUrl,
        };
      }
    });

    return postcastDetail;
  }
  async getPodcasts(): Promise<Podcast[]> {
    let response = await myFetch<PodcastResponse>(
      `${BASE_URL}/us/rss/toppodcasts/limit=100/json`
    );
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
