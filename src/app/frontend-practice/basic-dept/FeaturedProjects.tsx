export function FeaturedProjects() {
  return (
    <ul className="no-scrollbar flex flex-row gap-4 overflow-x-scroll p-10 md:p-16 xl:p-20">
      <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
        <FeaturedProjectItem />
      </li>
      <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
        <FeaturedProjectItem />
      </li>
      <li className="w-[75vw] flex-shrink-0 md:w-[40vw] xl:w-[29vw]">
        <FeaturedProjectItem />
      </li>
    </ul>
  );
}

function FeaturedProjectItem() {
  return (
    <a href="#" className="group w-[75vw] md:w-[40vw]">
      <div className="aspect-[3/4] w-full bg-blue-400"></div>
      <h3 className="pt-2 text-lg font-bold group-hover:underline">
        PROJECT NAME
      </h3>
      <p className="max-w-[40%] pt-2 text-xs md:max-w-[60%]">
        SHORT DESCRIPTION OF THE PROJECT
      </p>
    </a>
  );
}
