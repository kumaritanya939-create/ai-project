import OpenAI from "openai";

const client = new OpenAI();

const res = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Hi" }],
});

console.log(res.choices[0].message.content);