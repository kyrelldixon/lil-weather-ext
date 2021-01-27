import Weather from "./Weather.svelte";
import { render, screen } from "@testing-library/svelte";

it("displays the temperature", () => {
  render(Weather);

  expect(screen.getBy);
});
