<script lang="ts">

  // show is a boolean
  export let showHistory: boolean = false;
  export let history: { equation: string; result: string }[] = [];
  export let onClose: () => void;

  // history is an array of strings
</script>

{#if showHistory}
  <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-gray-800 text-white p-4 rounded shadow-lg w-80">
  <div class="flex justify-between items-center">
    <h2 class="font-bold mb-2">History</h2>
    <button type="button" class="bg-transparent border-0 text-white cursor-pointer text-lg"
     on:click={onClose}>✕</button>
  </div>
    {#each history as entry}
    <div>{entry.equation} = {entry.result}</div>
    {/each}
  </div>
{/if}