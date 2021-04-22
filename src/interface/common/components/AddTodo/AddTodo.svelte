<script>
  import { todos } from "../../../../domain/models/todos";
  import { v4 as uuid } from "uuid";
  import Button from "../Button/Button.svelte";

  let newTodo = "";
  function addTodo() {
    $todos = [
      ...$todos,
      {
        id: uuid(),
        title: newTodo,
        done: false,
      },
    ];
    newTodo = "";
  }
</script>

<div class="container">
  <input type="text" bind:value={newTodo} placeholder="Add todo name" />
  <Button action={addTodo} text="Add Todo" style="primary-bordered" />
</div>

<style type="text/scss">
  .container {
    width: 800px;
    padding: 40px;

    position: absolute;
    top: 200px;
    left: calc(50vw - 400px);
    z-index: 100;

    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    input {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;

      background-color: #f8f8f8;
    }
  }
</style>
