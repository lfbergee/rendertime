import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        <h1>Resumable architecture with Qwik</h1>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
