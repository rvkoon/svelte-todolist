<script>
  export let action;
  export let text;
  export let style;
</script>

<button on:click={action} class={`${style ? style : "primary"}`}>
  {text}
</button>

<style type="text/scss">
  button {
    padding: 10px 20px;
    color: #fff;
    border-radius: 8px;

    &.primary {
      background-color: #7646ff;
    }

    &.secondary {
      background-color: #64748b;
    }

    &.primary-bordered {
      background-color: transparent;
      border: solid 1px #7646ff;
      color: #7646ff;
    }

    &.secondary-bordered {
      background-color: transparent;
      border: solid 1px #64748b;
      color: #64748b;
    }

    &.secondary-cancel {
      background-color: transparent;
      border: solid 1px #ef4444;
      color: #ef4444;
    }

    &.cancel {
      background-color: #ef4444;
    }

    &.secondary-success {
      background-color: transparent;
      border: solid 1px #34d399;
      color: #34d399;
    }

    &.success {
      background-color: #34d399;
    }
  }
</style>
