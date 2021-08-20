<script lang="ts">
  let id: string;
  export { id };
</script>

<section class="p-5 w-full" {id}>
  <slot name="title" />

  <hr class="mt-1 mb-3" />

  <slot name="body" />
</section>
