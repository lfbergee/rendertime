import { useState } from "preact/hooks";

export function App() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    "Write talk for dev/øl",
    "Create live examples",
    "Run demo at dev/øl",
  ]);

  return (
    <>
      <h1>Client side rendering with vite and preact</h1>
      <main>
        <section>
          <ul>
            {todoList.map((item) => (
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
    </>
  );
}
