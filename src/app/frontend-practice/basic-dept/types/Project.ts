import { z } from "zod";

const ZProject = z.object({
  projectName: z.string(),
  about: z.string(),
  imageUrl: z.string(),
  imageHeight: z.number().int().positive(),
  imageWidth: z.number().int().positive(),
});

export type Project = z.infer<typeof ZProject>;

const ZProjectList = z.array(ZProject);

export function parseProjectList(input: unknown): Project[] {
  return ZProjectList.parse(input);
}
