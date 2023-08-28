import { NewsArticle, parseNewsArticleList } from "../../types/NewsArticle";
import { urlRoot } from "../config";

export default async function fetchNews() {
  try {
    const res = await fetch(`${urlRoot}/news`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const body = await res.json();
    return parseNewsArticleList(body);
  } catch (error) {
    console.log(error);
    return null;
  }
}
