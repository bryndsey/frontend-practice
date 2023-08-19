import { urlRoot } from "../config";

export default async function fetchNews() {
  // TODO: Remove this once the endpoint is ready
  return null;

  if (urlRoot === undefined) {
    return null;
  }

  try {
    const res = await fetch(`${urlRoot}/news`);

    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
