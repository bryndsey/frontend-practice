import PlaceholderImage from "@assets/pexels-emilio-gonzález-17781404.jpg";
import { NewsArticle } from "../../types/NewsArticle";

export async function GET(request: Request) {
  const hardcodedResponse: NewsArticle[] = [
    {
      title: "First News Article",
      subtitle: "This is content about what the first article contains",
      dateString: "8.15.23",
      thumbnailUrl: PlaceholderImage.src,
      thumbnailHeight: PlaceholderImage.height,
      thumbnailWidth: PlaceholderImage.width,
    },
    {
      title: "Second News Article",
      subtitle: "This is content about what the second article contains",
      dateString: "8.14.23",
      thumbnailUrl: PlaceholderImage.src,
      thumbnailHeight: PlaceholderImage.height,
      thumbnailWidth: PlaceholderImage.width,
    },
    {
      title: "A Third News Article",
      subtitle: "This is content about what the third article contains",
      dateString: "8.13.23",
      thumbnailUrl: PlaceholderImage.src,
      thumbnailHeight: PlaceholderImage.height,
      thumbnailWidth: PlaceholderImage.width,
    },
    {
      title: "One More News Article",
      subtitle: "This is content about what the last article contains",
      dateString: "8.12.23",
      thumbnailUrl: PlaceholderImage.src,
      thumbnailHeight: PlaceholderImage.height,
      thumbnailWidth: PlaceholderImage.width,
    },
  ];

  return new Response(JSON.stringify(hardcodedResponse), { status: 200 });
}
