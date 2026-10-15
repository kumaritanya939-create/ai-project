import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

const model = openai('gpt-4o');

// Swap the brain, keep the app:
// const model = anthropic('claude-sonnet-4.5');

const { text } = await generateText({
  model,
  prompt: 'Hello!',
});

console.log(text);