import { LinkButton } from "./components/LinkButton";

export function SpotlightSection() {
  return (
    <section className="flex flex-col-reverse items-start gap-2 p-10 md:grid md:grid-cols-2 xl:gap-16 xl:p-20">
      <div className="sticky top-28 flex flex-col items-start gap-6">
        <q className="text-5xl font-bold xl:text-7xl">
          BRYAN/LINZ® HELPS BRANDS ● CONNECT W/ CULTURE
        </q>
        <p>
          NOBODY <b>SAID THAT</b>
        </p>
        <LinkButton>ABOUT US</LinkButton>
      </div>
      <div className="aspect-[3/4] w-full bg-purple-400"></div>
    </section>
  );
}
