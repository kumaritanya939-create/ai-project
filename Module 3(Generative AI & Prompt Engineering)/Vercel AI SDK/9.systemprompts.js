const result = streamText({
  model: openai('gpt-4o'),

  system:
    'Answer in large paragraphs with a lot of details and examples. Avoid lists.',

  messages: await convertToModelMessages(messages),
});