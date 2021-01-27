import Weather from "./Weather.svelte";
import { render, screen } from "@testing-library/svelte";

it("displays the temperature and description", () => {
  render(Weather);

  expect(screen.getByText(`46 °`)).toBeInTheDocument;
  expect(screen.getByText(/mostly sunny/i)).toBeInTheDocument;
});
