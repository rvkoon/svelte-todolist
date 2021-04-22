import { writable } from "svelte/store"
import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "Learn SvelteJS",
    done: false,
  },
  {
    id: uuid(),
    title: "Learn Javascript",
    done: true,
  },
]

export let todos = writable([...initialState])
