import fetchProjects from "../api/projects/fetchProjects";
import { Project } from "../types/Project";
import Image from "next/image";

async function getData() {
  return await fetchProjects();
}

export async function FeaturedProjects() {
  const data = await getData();

  if (data === null) return null;

  return (
    <ul className="no-scrollbar flex flex-row gap-4 overflow-x-auto p-10 md:p-16 xl:grid xl:grid-cols-3 xl:p-20">
      {data.slice(0, 3).map((project) => (
        <li
          key={project.projectName}
          className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-auto"
        >
          <FeaturedProjectItem {...project} />
        </li>
      ))}
    </ul>
  );
}

function FeaturedProjectItem({
  projectName,
  about,
  imageUrl,
  imageWidth,
  imageHeight,
}: Project) {
  return (
    <a href="#" className="group w-[75vw] uppercase md:w-[40vw]">
      <div className="aspect-[3/4] w-full overflow-clip">
        <picture>
          <Image
            className="h-full w-full scale-105 object-cover transition-transform duration-[250ms] group-hover:scale-100"
            src={imageUrl}
            alt="project thumbnail"
            width={imageWidth}
            height={imageHeight}
          />
        </picture>
      </div>

      <h3 className="pt-2 text-lg font-bold group-hover:underline">
        {projectName}
      </h3>
      <p className="max-w-[40%] pt-2 text-xs md:max-w-[60%]">{about}</p>
    </a>
  );
}
