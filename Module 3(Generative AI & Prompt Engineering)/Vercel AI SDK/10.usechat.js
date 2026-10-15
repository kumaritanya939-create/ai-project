'use client';

import { useChat } from '@ai-sdk/react';

export default function Chat() {
  const { messages, sendMessage, status } = useChat();

  return (
    <div>
      <button
        onClick={() => sendMessage({ text: 'Hello!' })}
        disabled={status !== 'ready'}
      >
        Send
      </button>
      {messages.map((message) => (
        <div key={message.id}>
          {message.parts.map((part, index) =>
            part.type === 'text' ? (
              <p key={index}>{part.text}</p>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
}
