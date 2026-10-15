import streamlit as st

# Display a user message bubble with an avatar
with st.chat_message("user"):
    st.write("Explain tokens.")

# Display an assistant message bubble with an avatar
with st.chat_message("assistant"):
    st.write("A token is a small chunk of text.")

# Text box pinned to the bottom of the page
prompt = st.chat_input("Ask anything...")

# Display the user's input
if prompt:
    st.write("You said:", prompt)