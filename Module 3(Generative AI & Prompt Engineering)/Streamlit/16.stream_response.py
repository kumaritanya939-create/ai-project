# Ask the provider for a stream
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": q}],
    stream=True
)

# Streamlit renders it and returns the full text
answer = st.write_stream(stream)