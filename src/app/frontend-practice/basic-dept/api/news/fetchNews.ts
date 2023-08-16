import { urlRoot } from "../config";

export default async function fetchNews() {
  const res = await fetch(`${urlRoot}/news`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
