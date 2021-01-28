<script lang="ts">
  import { getForecast } from "../weather";
  import Weather from "./Weather.svelte";

  let forecast = getForecast();
  let currentDay = 0;

  const setCurrentDay = (day: number) => {
    currentDay = day;
  };

  $: currentForecast = forecast.daily[currentDay];
</script>

<main>
  <Weather
    temperature={Math.round(currentForecast.temp.day)}
    description={currentForecast.weather[0].description}
  />
  <div class="flex justify-between w-full mt-8">
    {#each forecast.daily as _, i}
      <button
        class={`w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-500${
          currentDay === i ? " bg-gray-500" : ""
        }`}
        on:click={() => setCurrentDay(i)}
      />
    {/each}
  </div>
</main>
