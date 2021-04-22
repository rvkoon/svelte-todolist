<script>
  import Todo from "../Todo/Todo.svelte";
  import { todos } from "../../../../domain/models/todos";

  function handleChangeStatus(event) {
    const idx = $todos.findIndex((el) => el.id === event.detail.id);
    $todos[idx].done = !$todos[idx].done;
  }
</script>

<div class="container">
  <p>LIST OF THINGS TO DO</p>
  {#each $todos as todo (todo.id)}
    <Todo
      id={todo.id}
      title={todo.title}
      done={todo.done}
      on:changeStatus={handleChangeStatus}
    />
  {/each}
</div>

<style type="text/scss">
  .container {
    width: 100%;
    min-height: 50px;
    padding: 30px;
    background-color: #f8f8f8;
    border-radius: 6px;
  }
</style>
