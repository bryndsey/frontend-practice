import { LinkButton } from "../components/LinkButton";

export function IntroSection() {
  return (
    <section className="grid grid-cols-1 gap-8 p-10 md:p-16 xl:grid-cols-2 xl:p-20">
      <div className="flex w-4/5 flex-col items-start gap-6 [text-wrap:balance] md:w-1/2 xl:w-full">
        <p className="text-2xl xl:text-4xl">
          {
            "BRYAN/LINZ® is a frontend developer building products and experiences that turn cultural values into company values."
          }
        </p>
        <LinkButton>SEE THE WORK</LinkButton>
      </div>
      <figure className="w-3/4 place-self-end text-end md:w-1/2 xl:w-full">
        <svg viewBox="0 0 40 22">
          <text x="5" y="17" fontWeight="bold" textAnchor="start">
            B/L®
          </text>
        </svg>
      </figure>
    </section>
  );
}
