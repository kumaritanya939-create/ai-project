import streamlit as st
from openai import OpenAI

# Create OpenAI client using the API key from Streamlit secrets
client = OpenAI(
    api_key=st.secrets["OPENAI_API_KEY"]
)

# Create chat history in session state
if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "system",
            "content": "You are a friendly, concise assistant."
        }
    ]

# Display previous chat messages
for m in st.session_state.messages:
    if m["role"] != "system":
        with st.chat_message(m["role"]):
            st.markdown(m["content"])

# Get new user message
if prompt := st.chat_input("Ask..."):

    # Add user's message to chat history
    st.session_state.messages.append(
        {
            "role": "user",
            "content": prompt
        }
    )

    # Display user's message
    with st.chat_message("user"):
        st.markdown(prompt)

    # Generate and stream assistant response
    with st.chat_message("assistant"):
        stream = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=st.session_state.messages,
            stream=True
        )

        # Display the streamed response
        answer = st.write_stream(stream)

    # Save assistant response to chat history
    st.session_state.messages.append(
        {
            "role": "assistant",
            "content": answer
        }
    )