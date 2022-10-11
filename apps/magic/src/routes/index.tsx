import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

interface State {
  todoList: string[];
  searchString: string;
}

export default component$(() => {
  const state = useStore<State>({
    todoList: [
      "Write talk for dev/øl",
      "Create live examples",
      "Run demo at dev/øl",
    ],
    searchString: "",
  });
  return (
    <div>
      <ul>
        {state.todoList.map((item) => (
          <li key={item}>
            <label>
              <input type="checkbox" />
              <span className="checkmark"></span>
              {item}
            </label>
          </li>
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
  title: "Resumable - Qwik",
};
