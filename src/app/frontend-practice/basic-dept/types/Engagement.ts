import { z } from "zod";

const ZEngagement = z.object({
  logoString: z.string(),
  clientName: z.string(),
  about: z.string(),
});

export type Engagement = z.infer<typeof ZEngagement>;

const ZEngagementList = z.array(ZEngagement);

export function parseEngagement(input: unknown): Engagement {
  return ZEngagement.parse(input);
}

export function parseEngagementList(input: unknown): Engagement[] {
  return ZEngagementList.parse(input);
}
