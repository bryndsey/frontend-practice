import { parseEngagementList } from "../../types/Engagement";
import { urlRoot } from "../config";

export default async function fetchEngagements() {
  try {
    const res = await fetch(`${urlRoot}/engagements`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = parseEngagementList(await res.json());
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
