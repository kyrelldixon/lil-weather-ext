<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { kelvinToFahrenheit } from "../utils/conversion";
  import { getDailyForecast, forecastStream, sendReady } from "../lib/weather";
  import Weather from "./Weather.svelte";
import type { DailyForecast } from "../types";

  let forecast: DailyForecast[] = [];
  let currentDay = 0;
  let forecastSubscription;

  onMount(() => {
    sendReady();
    forecastSubscription = forecastStream.subscribe(([_forecast]) => {
      console.log(_forecast);
      forecast = _forecast;
    });
  });

  onDestroy(() => {
    forecastSubscription.unsubscribe();
  });

  const setCurrentDay = (day: number) => {
    currentDay = day;
  };

  $: currentForecast = forecast[currentDay];
  $: currentTemp = currentForecast ? Math.round(kelvinToFahrenheit(currentForecast.temp)) : 0;
  $: currentDescription = currentForecast?.description ?? '';
</script>

{#if forecast}
  <div>
    <Weather temperature={currentTemp} description={currentDescription} />
    <div class="flex justify-between w-full mt-8">
      {#each forecast as _, i}
        <button
          class={`w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-500${
            currentDay === i ? " bg-gray-500" : ""
          }`}
          on:click={() => setCurrentDay(i)}
        />
      {/each}
    </div>
  </div>
{/if}
