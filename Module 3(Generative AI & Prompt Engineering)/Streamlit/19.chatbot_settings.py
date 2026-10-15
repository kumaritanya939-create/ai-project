import streamlit as st
from openai import OpenAI

# Create OpenAI client using the API key from Streamlit secrets
client = OpenAI(
    api_key=st.secrets["OPENAI_API_KEY"]
)

# Initialize chat history
if "messages" not in st.session_state:
    st.session_state.messages = [
        {
            "role": "system",
            "content": "You are a friendly, concise assistant."
        }
    ]

# Sidebar settings
with st.sidebar:
    st.header("Settings")

    # Select the AI model
    model = st.selectbox(
        "Model",
        ["gpt-4o-mini", "gpt-4o", "qwen3.5"]
    )

    # Set temperature
    temp = st.slider(
        "Temperature",
        0.0,
        1.0,
        0.7
    )

    # Display number of messages
    st.metric(
        "Turns",
        len(st.session_state.messages)
    )

    # Clear chat history
    if st.button("Clear chat"):
        st.session_state.messages = []
        st.rerun()  # Redraw the app immediately


# Send the chat history to the model
resp = client.chat.completions.create(
    model=model,
    temperature=temp,
    messages=st.session_state.messages
)

# Display the response
answer = resp.choices[0].message.content

st.write(f"*{model}*: {answer}")