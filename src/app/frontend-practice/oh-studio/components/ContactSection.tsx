import RevealOnceVisible from "./RevealOnceVisible";

export default function ContactSection() {
  return (
    <section className="my-8 flex flex-col items-center justify-center p-5 text-4xl font-medium leading-tight md:p-10">
      <RevealOnceVisible>{"Let's work together."}</RevealOnceVisible>
      <RevealOnceVisible transition={{ delay: 0.075 }}>
        <a href="#" className="text-neutral-500 hover:text-neutral-400">
          {"Get in touch."}
        </a>
      </RevealOnceVisible>
    </section>
  );
}
