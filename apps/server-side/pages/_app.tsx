import { useState } from "react";
import Head from "next/head";
import "./index.css";

export default function Web() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    "Write talk for dev/øl",
    "Create live examples",
    "Run demo at dev/øl",
  ]);

  return (
    <>
      <Head>
        <title>SSR - Next.js</title>
      </Head>
      <h1>Server side rendering with Next.js</h1>
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
