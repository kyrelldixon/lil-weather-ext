<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { kelvinToFahrenheit } from "../utils/conversion";
  import { forecastStream, sendReady } from "../lib/weather";
  import type { DailyForecast } from "../types";
  import Weather from "./Weather.svelte";

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

  $: selectedForecast = forecast[currentDay];
  $: temperature = selectedForecast ? Math.round(kelvinToFahrenheit(selectedForecast.temp)) : 0;
  $: description = selectedForecast?.description ?? '';
  $: date = selectedForecast?.datetime
</script>

{#if selectedForecast}
  <div>
    <Weather {date} {temperature} {description} />
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
