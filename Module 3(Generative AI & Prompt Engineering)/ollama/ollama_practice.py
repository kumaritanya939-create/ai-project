import ollama_test
 
stream = ollama_test.chat(
    model="qwen3:1.7b",
    messages=[
        {"role": "user", "content": "Write a short poem about coding."},
    ],
    stream=True,
)
 
for chunk in stream:
    print(chunk["message"]["content"], end="", flush=True)