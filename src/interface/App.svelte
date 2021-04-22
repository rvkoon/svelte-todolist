<script>
  import Todos from "./common/components/Todos/Todos.svelte";
  import AddTodo from "./common/components/AddTodo/AddTodo.svelte";
  import Button from "./common/components/Button/Button.svelte";

  let modalIsVisible = false;

  function handleButton() {
    modalIsVisible = !modalIsVisible;
  }
</script>

<main>
  <h3>Todo App using Svelte</h3>
  <p>This is my very first application using svelteJs.</p>
  <Todos />
  {#if modalIsVisible}
    <AddTodo />
  {/if}
  <Button
    action={handleButton}
    style={!modalIsVisible ? "success" : "cancel"}
    text={!modalIsVisible ? "Add Todo" : "Close Modal"}
  />
</main>

<style type="text/scss">
  main {
    //size
    width: 1000px;

    //behavior
    margin: 0 auto;
    padding-top: 100px;

    h3,
    p {
      //behavior
      margin-bottom: 50px;

      //style
      text-align: center;
    }
  }
</style>
