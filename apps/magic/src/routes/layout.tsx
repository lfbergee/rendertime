import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>Resumable architecture with Qwik</h1>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
