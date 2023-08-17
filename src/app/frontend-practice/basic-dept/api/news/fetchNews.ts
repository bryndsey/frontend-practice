import { urlRoot } from "../config";

export default async function fetchNews() {
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
