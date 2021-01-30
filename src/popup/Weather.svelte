<script lang="ts">
  export let temperature: number;
  export let description: string;
  export let date: Date;
</script>

<section class="flex flex-col items-center justify-center w-32 space-y-2">
  <div
    class="w-16 h-16 rounded-full bg-gradient-to-t from-green-400 to-blue-500"
  />
  <div class="space-y-1 text-center">
    <span
      data-testid="temperature"
      class="text-4xl font-bold leading-none text-gray-800 dark:text-gray-100"
      >{temperature}&deg;</span
    >
    <p
      data-testid="forecast"
      class="text-lg leading-none text-gray-600 dark:text-gray-300"
    >
      {description}
    </p>
  </div>
</section>
