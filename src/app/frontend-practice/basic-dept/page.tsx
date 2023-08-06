export default function Page() {
  return (
    <main className="bg-neutral-100 text-stone-800">
      <section className="h-screen w-full bg-green-500"></section>

      <section className="grid grid-cols-1 p-16 lg:grid-cols-2">
        <div className="flex w-1/2 flex-col items-start gap-6">
          <p>{"BRYAN/LINZ® is a person building things."}</p>
          <button className="rounded-full border px-4 py-2">
            SEE THE WORK
          </button>
        </div>
        <p className="text-end text-9xl font-extrabold">B/L®</p>
      </section>

      <section className="flex flex-row gap-4 overflow-x-scroll p-8">
        <div className="aspect-[3/4] w-[80vw] flex-shrink-0 bg-blue-400 sm:w-[40vw]"></div>
        <div className="aspect-[3/4] w-[80vw] flex-shrink-0 bg-red-400 sm:w-[40vw]"></div>
        <div className="aspect-[3/4] w-[80vw] flex-shrink-0 bg-yellow-400 sm:w-[40vw]"></div>
      </section>
    </main>
  );
}
