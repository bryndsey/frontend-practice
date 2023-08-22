import { LinkButton } from "../components/LinkButton";
import Image from "next/image";
import { NewsArticle } from "../types/NewsArticle";
import fetchNews from "../api/news/fetchNews";

async function getData() {
  return await fetchNews();
}

export async function FeaturedNews() {
  const data = await getData();

  if (data === null) {
    return null;
  }

  return (
    <section className="p-10 md:p-16 xl:p-20">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold">FEATURED NEWS</h2>
        <LinkButton>VIEW ALL</LinkButton>
      </div>

      <ul className="mt-8 flex flex-col gap-5 md:gap-10">
        {(data as NewsArticle[]).map((article) => (
          <li key={article.title}>
            <NewsItem {...article} />
          </li>
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
      <figure className="aspect-[4/3] w-full overflow-hidden md:w-1/3">
        <Image
          className="min-h-full min-w-full scale-105 object-cover transition-transform duration-[250ms] group-hover:scale-100"
          src={thumbnailUrl}
          alt="article thumbnail"
          width={thumbnailWidth}
          height={thumbnailHeight}
        />
      </figure>
      <div className="relative flex flex-1 flex-col justify-between gap-8">
        <h3 className="max-w-[75%] text-2xl uppercase group-hover:underline">
          {title}
        </h3>
        <figure className="absolute bottom-0 right-0 box-content text-2xl md:top-0 md:text-5xl">
          {"->"}
        </figure>
        <span className="text-xs">
          {<b>PRESS </b>}
          {dateString}
        </span>
      </div>
    </a>
  );
}
