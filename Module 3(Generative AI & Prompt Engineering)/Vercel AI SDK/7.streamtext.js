import { streamText, convertToModelMessages } from 'ai';
import { openai } from '@ai-sdk/openai';

export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),

    system:
      'Answer in large paragraphs with a lot of details and examples. Avoid lists.',

    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}