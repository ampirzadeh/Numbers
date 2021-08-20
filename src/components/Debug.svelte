<script lang="ts">
  const toggleDebug = () => document.body.classList.toggle("debug");
</script>

<button
  class="btn fixed top-3 left-3 bg-red-700 hover:bg-red-800 btn"
  on:click={toggleDebug}>Debug</button
>

<button
  class="btn fixed bottom-0 right-0 p-3 bg-white sm:bg-green-100 md:bg-green-400 lg:bg-green-600 xl:bg-green-800 2xl:bg-green-900 rounded-none"
/>
