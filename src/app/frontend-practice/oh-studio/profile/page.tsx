import Chip from "../components/Chip";
import ContactSection from "../components/ContactSection";

export default function Profile() {
  return (
    <>
      <header className="flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
        <h1 className="max-w-xl break-words text-center text-5xl font-medium leading-tight">
          {"Hey 👋🏼 I'm Bryan"}
        </h1>
      </header>

      <div className="flex h-[500px] w-full flex-row gap-4 p-10">
        <div className="h-full flex-1 rounded-3xl bg-gray-200"></div>
        <div className="hidden h-full flex-1 rounded-3xl bg-gray-200 md:block"></div>
      </div>

      <section className="flex w-full flex-col items-center gap-4 px-10 py-36">
        <h2>
          <Chip>About</Chip>
        </h2>
        <p className="max-w-[600px] text-center text-4xl font-medium">
          A creative developer based in the US. I combine my experience in
          creativity and problem-solving to create compelling experiences.
        </p>
      </section>

      <section>
        <Chip>Experience</Chip>
      </section>

      <section>
        <Chip>Clients</Chip>
      </section>

      <ContactSection />
    </>
  );
}
