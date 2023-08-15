import { LinkButton } from "../components/LinkButton";

export function FeaturedNews() {
  return (
    <section className="p-10 md:p-16 xl:p-20">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold">FEATURED NEWS</h2>
        <LinkButton>VIEW ALL</LinkButton>
      </div>

      <ul className="mt-8 flex flex-col gap-5 md:gap-10">
        <li>
          <NewsPreviewItem />
        </li>
        <li>
          <NewsPreviewItem />
        </li>
        <li>
          <NewsPreviewItem />
        </li>
        <li>
          <NewsPreviewItem />
        </li>
        <li>
          <NewsPreviewItem />
        </li>
        <li>
          <NewsPreviewItem />
        </li>
      </ul>
    </section>
  );
}

function NewsPreviewItem() {
  return (
    <a
      href="#"
      className="before:bg-content group relative flex w-full flex-col gap-4 pt-5 before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px] md:flex-row"
    >
      <div className="aspect-[4/3] w-full bg-orange-800 md:w-1/3"></div>
      <div className="relative flex flex-1 flex-col justify-between gap-8">
        <h3 className="max-w-[75%] text-2xl group-hover:underline">
          THIS IS THE TITLE OF THE ARTICLE. PLEASE READ ME.
        </h3>
        <figure className="absolute bottom-0 right-0 box-content text-2xl md:top-0 md:text-5xl">
          {"->"}
        </figure>
        <span className="text-xs">
          <b>PRESS</b> 8.7.23
        </span>
      </div>
    </a>
  );
}
