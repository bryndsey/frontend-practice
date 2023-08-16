import { LinkButton } from "../components/LinkButton";
import Image from "next/image";

type NewsArticle = {
  title: string;
  subtitle: string;
  dateString: string;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
};

async function getData() {
  const urlRoot =
    process.env.NODE_ENV === "development"
      ? `http://localhost:${process.env.PORT}`
      : `https://${process.env.VERCEL_URL}`;

  const res = await fetch(`${urlRoot}/frontend-practice/basic-dept/api/news`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function FeaturedNews() {
  const data = await getData();

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
        {(data as NewsArticle[]).map((article) => (
          <NewsItem key={article.title} {...article} />
        ))}
      </ul>
    </section>
  );
}

function NewsItem({
  title,
  subtitle,
  dateString,
  thumbnailUrl,
  thumbnailWidth,
  thumbnailHeight,
}: NewsArticle) {
  return (
    <a
      href="#"
      className="before:bg-content group relative flex w-full flex-col gap-4 pt-5 before:absolute before:left-0 before:right-0 before:top-0 before:h-[1px] md:flex-row"
    >
      <Image
        className="aspect-[4/3] w-full object-cover md:w-1/3"
        src={thumbnailUrl}
        alt="article thumbnail"
        width={thumbnailWidth}
        height={thumbnailHeight}
      />
      <div className="relative flex flex-1 flex-col justify-between gap-8">
        <h3 className="max-w-[75%] text-2xl uppercase group-hover:underline">
          {title}
        </h3>
        <figure className="absolute bottom-0 right-0 box-content text-2xl md:top-0 md:text-5xl">
          {"->"}
        </figure>
        <span className="text-xs">
          {<b>PRESS</b>}
          {dateString}
        </span>
      </div>
    </a>
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
