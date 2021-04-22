<script>
  import { createEventDispatcher } from "svelte";

  export let done;
  export let title;
  export let id;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("changeStatus", { id });
  }
</script>

<div class="container" on:click={handleClick}>
  {#if !done}
    <p class="text-error-500">{title}</p>
  {:else}
    <p class="text-success-500">{title}</p>
  {/if}
</div>

<style type="text/scss">
  .container {
    width: 100%;
    height: 50px;

    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border-radius: 6px;

    cursor: pointer;
  }
</style>
