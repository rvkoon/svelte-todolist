<script>
	import Todos from "./common/components/Todos/Todos.svelte";
</script>

<main>
	<h3>Todo App using Svelte</h3>
	<p>This is my very first application using svelteJs.</p>
	<Todos />
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
