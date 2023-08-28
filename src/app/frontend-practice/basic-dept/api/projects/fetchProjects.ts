import { parseProjectList } from "../../types/Project";
import { urlRoot } from "../config";

export default async function fetchProjects() {
  try {
    const res = await fetch(`${urlRoot}/projects`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const body = await res.json();
    return parseProjectList(body);
  } catch (error) {
    console.log(error);
    return null;
  }
}
