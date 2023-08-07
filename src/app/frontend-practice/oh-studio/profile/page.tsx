import Chip from "../components/Chip";
import ContactSection from "../components/ContactSection";
import RevealOnceVisible from "../components/RevealOnceVisible";

type WorkType = "Full-time" | "Director";

function WorkExperienceItem({
  startYear,
  endYear,
  current,
  company,
  title,
  type,
}: {
  startYear: number;
  endYear?: number;
  current?: boolean;
  company: string;
  title: string;
  type: WorkType;
}) {
  return (
    <div className="flex flex-col items-center gap-6 p-5 text-sm">
      <div className="flex flex-col items-center gap-2">
        <p className="text-neutral-400">{`${startYear}${
          current ? " —  Present" : endYear ? ` — ${endYear}` : ""
        }`}</p>
        <p className="text-lg font-medium">{company}</p>
        <p className="text-neutral-400">{title}</p>
      </div>
      <Chip>{type}</Chip>
    </div>
  );
}

function ClientListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid aspect-[4/3] place-content-center">{children}</div>
  );
}

export default function Profile() {
  return (
    <>
      <RevealOnceVisible>
        <header className="flex min-h-[379px] flex-col items-center justify-evenly p-5 md:p-10">
          <h1 className="max-w-xl break-words text-center text-5xl font-medium leading-tight">
            {"Hey 👋🏼 I'm Bryan"}
          </h1>
        </header>
      </RevealOnceVisible>

      <div className="flex h-[500px] w-full flex-row gap-4 p-10">
        <RevealOnceVisible
          transition={{ delay: 0.5 }}
          className="h-full flex-1"
        >
          <div className="h-full rounded-3xl bg-gray-200"></div>
        </RevealOnceVisible>
        <RevealOnceVisible
          transition={{ delay: 0.75 }}
          className="hidden h-full flex-1 md:block"
        >
          <div className="h-full rounded-3xl bg-gray-200 "></div>
        </RevealOnceVisible>
      </div>

      <section className="flex w-full flex-col items-center gap-4 px-10 py-36">
        <h2>
          <RevealOnceVisible>
            <Chip>About</Chip>
          </RevealOnceVisible>
        </h2>
        <RevealOnceVisible transition={{ delay: 0.25 }}>
          <p className="max-w-[600px] text-center text-4xl font-medium">
            A creative developer based in the US. I combine my experience in
            creativity and problem-solving to create compelling experiences.
          </p>
        </RevealOnceVisible>
      </section>

      <section className="flex w-full flex-col items-center gap-4 px-10 py-10">
        <RevealOnceVisible>
          <Chip>Experience</Chip>
        </RevealOnceVisible>
        <RevealOnceVisible transition={{ delay: 0.25 }}>
          <p className="text-center text-4xl font-medium">
            {"Where I've worked"}
          </p>
        </RevealOnceVisible>

        <RevealOnceVisible className="grid w-full grid-cols-2 gap-x-0 gap-y-5 p-5 md:grid-cols-3">
          <WorkExperienceItem
            startYear={2013}
            current
            company="Bryndsey Studio"
            title="Developer"
            type="Director"
          />
          <WorkExperienceItem
            startYear={2018}
            current
            company="Big Nerd Ranch"
            title="Solution Architect"
            type="Full-time"
          />
          <WorkExperienceItem
            startYear={2015}
            endYear={2018}
            company="Metova"
            title="Senior Developer"
            type="Full-time"
          />
          <WorkExperienceItem
            startYear={2014}
            endYear={2015}
            company="Asurion"
            title="Developer"
            type="Full-time"
          />
          <WorkExperienceItem
            startYear={2012}
            endYear={2014}
            company="HP Exstream"
            title="Developer"
            type="Full-time"
          />
        </RevealOnceVisible>
      </section>

      <section className="flex w-full flex-col items-center gap-4 p-10">
        <RevealOnceVisible>
          <Chip>Clients</Chip>
        </RevealOnceVisible>
        <RevealOnceVisible transition={{ delay: 0.25 }}>
          <p className="text-center text-4xl font-medium">
            {"Who I've worked with"}
          </p>
        </RevealOnceVisible>

        <RevealOnceVisible className="grid w-full grid-cols-2 gap-x-0 gap-y-5 p-5 text-xl font-medium md:grid-cols-4">
          <ClientListItem>Alice</ClientListItem>
          <ClientListItem>Bob</ClientListItem>
          <ClientListItem>Cindy</ClientListItem>
          <ClientListItem>Dani</ClientListItem>
          <ClientListItem>Esther</ClientListItem>
          <ClientListItem>Faruk</ClientListItem>
          <ClientListItem>Guanglei</ClientListItem>
          <ClientListItem>Heidi</ClientListItem>
        </RevealOnceVisible>
      </section>

      <ContactSection />
    </>
  );
}
