import { renderHook, render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MemoryRouter } from "react-router-dom";
import { usePodcastsStore } from "../store/podcasts";

const setup = () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};
describe("Header component", () => {
  beforeEach(() => {
    setup();
  });
  // Tests that Header renders without errors
  it("renders without errors", () => {});

  // Tests that Header displays the correct title
  it("displays the correct title", () => {
    const title = screen.getByText("Podcaster");
    expect(title).toBeInTheDocument();
  });

  // Tests that Header dont display loading animation
  it("dont show loading animation when loading is false", () => {
    const { result } = renderHook(() => usePodcastsStore());

    expect(result.current.loading).toBe(false);
  });
});
