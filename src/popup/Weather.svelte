<script lang="ts">
  export let temperature = 46;
  export let description = "Mostly Sunny";
</script>

<section class="flex flex-col items-center justify-center w-32 space-y-2">
  <div
    class="w-16 h-16 rounded-full bg-gradient-to-t from-green-400 to-blue-500"
  />
  <div class="space-y-1">
    <span
      data-testid="temperature"
      class="text-4xl font-bold leading-none text-gray-800"
      >{temperature}&deg;</span
    >
    <p data-testid="forecast" class="text-lg leading-none opacity-70">
      {description}
    </p>
  </div>
</section>
