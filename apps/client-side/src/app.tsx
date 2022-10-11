import { useState } from "preact/hooks";

export function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    "Buy Milk",
    "Write Blog",
    "Fill Gas",
  ]);

  return (
    <main>
      <h1>Client side rendering with vite and preact</h1>
      <section>
        <ul>
          {todoList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            if (value) {
              setTodoList((prevList) => [...prevList, value]);
              setValue("");
            }
          }}
        >
          Add
        </button>
      </section>
    </main>
  );
}
