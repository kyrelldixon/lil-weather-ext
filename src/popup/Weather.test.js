import Weather from "./Weather.svelte";
import { render, screen } from "@testing-library/svelte";

it("displays the temperature and description", () => {
  const props = { temperature: 46, description: "Mostly Sunny" };
  const { rerender } = render(Weather, props);

  expect(screen.getByText(`${props.temperature}°`)).toBeInTheDocument;
  expect(screen.getByText(props.description)).toBeInTheDocument;

  props.temperature = 80;
  props.description = "Cloudy";

  rerender(props);

  expect(screen.getByText(`${props.temperature}°`)).toBeInTheDocument;
  expect(screen.getByText(props.description)).toBeInTheDocument;
});
