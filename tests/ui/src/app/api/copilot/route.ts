import {Copilot} from 'monacopilot';

const copilot = new Copilot(process.env.GROQ_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const completion = await copilot.complete({
    body,
  });

  return Response.json(completion);
}
