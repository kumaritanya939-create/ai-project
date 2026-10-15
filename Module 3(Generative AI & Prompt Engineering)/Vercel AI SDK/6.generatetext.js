import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function GET() {
  const { text } = await generateText({
    model: openai('gpt-4o'),
    prompt: 'Give me one interesting fact about JavaScript.',
  });

  return Response.json({ text });
}