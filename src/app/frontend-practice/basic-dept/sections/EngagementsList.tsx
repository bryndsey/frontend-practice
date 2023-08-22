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
      {(data as Engagement[]).map((engagement) => (
        <li
          className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]"
          key={engagement.clientName}
        >
          <figure className="font-serif text-4xl font-extrabold italic">
            {engagement.logoString}
          </figure>
          <h3 className="before:bg-content relative mt-8 pt-12 font-bold uppercase before:absolute before:top-0 before:block before:h-[2px] before:w-5">
            {engagement.clientName}
          </h3>
          <p className="mt-5 text-sm">{engagement.about}</p>
        </li>
      ))}
    </ul>
  );
}
function EngagementItem() {
  return (
    <li className="w-[75vw] flex-shrink-0 md:w-[40vw] lg:w-[30vw]">
      <figure className="font-serif text-4xl font-extrabold italic">
        LOGO
      </figure>
      <h3 className="before:bg-content relative mt-8 pt-12 font-bold before:absolute before:top-0 before:block before:h-[2px] before:w-5">
        CLIENT NAME
      </h3>
      <p className="mt-5 text-sm">
        This is some text about this client. It explains who they are and what I
        did for them.
      </p>
    </li>
  );
}
