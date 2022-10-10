import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

interface State {
  todoList: string[];
  searchString: string;
}

export default component$(() => {
  const state = useStore<State>({
    todoList: ["Buy Milk", "Write Blog", "Fill Gas"],
    searchString: "",
  });
  return (
    <div>
      <ul>
        {state.todoList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={state.searchString}
        onInput$={(e) =>
          (state.searchString = (e.target as HTMLInputElement).value)
        }
      />
      <button
        onClick$={() => {
          if (state.searchString) {
            state.todoList = [...state.todoList, state.searchString];
            state.searchString = "";
          }
        }}
      >
        Add
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
