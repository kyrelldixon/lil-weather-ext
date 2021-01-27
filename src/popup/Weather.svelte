<script lang="ts">
  let temperature = 46;
</script>

<main class="flex flex-col items-center justify-center w-32">
  <div
    class="w-16 h-16 rounded-full bg-gradient-to-t from-green-400 to-blue-500"
  />
  <span data-testid="temperature" class="text-4xl font-black text-gray-900"
    >{temperature} &deg;</span
  >
  <p data-testid="forecast" class="text-lg">Mostly Sunny</p>
</main>
