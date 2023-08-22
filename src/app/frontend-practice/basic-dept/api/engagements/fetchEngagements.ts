import { urlRoot } from "../config";

export default async function fetchEngagements() {
  try {
    const res = await fetch(`${urlRoot}/engagements`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
