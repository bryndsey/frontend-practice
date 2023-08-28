import fetchEngagements from "../api/engagements/fetchEngagements";
import { Engagement } from "../types/Engagement";

async function getData() {
  return await fetchEngagements();
}

export async function EngagementsList() {
  const data = await getData();

  if (data === null) return null;

  return (
    <ul className="relative flex flex-row gap-4">
      {data.map((engagement) => (
        <EngagementItem key={engagement.clientName} {...engagement} />
      ))}
    </ul>
  );
}

function EngagementItem({ logoString, clientName, about }: Engagement) {
  return (
    <li className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]">
      <figure className="font-serif text-4xl font-extrabold italic">
        {logoString}
      </figure>
      <h3 className="before:bg-content relative mt-8 pt-12 font-bold uppercase before:absolute before:top-0 before:block before:h-[2px] before:w-5">
        {clientName}
      </h3>
      <p className="mt-5 text-sm">{about}</p>
    </li>
  );
}
