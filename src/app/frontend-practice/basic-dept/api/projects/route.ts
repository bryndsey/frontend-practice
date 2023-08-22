import PlaceholderImage from "@assets/pexels-emilio-gonzález-17781404.jpg";
import { Project } from "../../types/Project";

export async function GET(request: Request) {
  const hardcodedResponseBody: Project[] = [
    {
      projectName: "Project 1",
      about: "A short description about Project 1",
      imageUrl: PlaceholderImage.src,
      imageHeight: PlaceholderImage.height,
      imageWidth: PlaceholderImage.width,
    },
    {
      projectName: "Project 2",
      about: "A short description about Project 2",
      imageUrl: PlaceholderImage.src,
      imageHeight: PlaceholderImage.height,
      imageWidth: PlaceholderImage.width,
    },
    {
      projectName: "Project 3",
      about: "A short description about Project 3",
      imageUrl: PlaceholderImage.src,
      imageHeight: PlaceholderImage.height,
      imageWidth: PlaceholderImage.width,
    },
  ];

  return new Response(JSON.stringify(hardcodedResponseBody), { status: 200 });
}
