import { Engagement } from "../../types/Engagement";

export async function GET(request: Request) {
  const hardcodedResponseBody: Engagement[] = [
    {
      logoString: "Client 1",
      clientName: "Client 1",
      about:
        "This is content about my engagement with Client 1. We worked together and it was great. The client was very happy.",
    },
    {
      logoString: "Client 2",
      clientName: "Client 2",
      about:
        "This is content about my engagement with Client 2. We worked together and it was great. The client was very happy.",
    },
    {
      logoString: "Client 3",
      clientName: "Client 3",
      about:
        "This is content about my engagement with Client 3. We worked together and it was great. The client was very happy.",
    },
    {
      logoString: "Client 4",
      clientName: "Client 4",
      about:
        "This is content about my engagement with Client 4. We worked together and it was great. The client was very happy.",
    },
    {
      logoString: "Client 5",
      clientName: "Client 5",
      about:
        "This is content about my engagement with Client 5. We worked together and it was great. The client was very happy.",
    },
  ];

  return new Response(JSON.stringify(hardcodedResponseBody), { status: 200 });
}
