import { urlRoot } from "../config";

export default async function fetchProjects() {
  try {
    const res = await fetch(`${urlRoot}/projects`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
