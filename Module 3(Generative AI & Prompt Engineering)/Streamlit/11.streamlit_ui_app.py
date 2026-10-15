import streamlit as st

raw = {
    "message": "Hello",
    "status": "success"
}

with st.sidebar:
    model = st.selectbox(
        "Model",
        ["gpt-4o-mini", "claude", "qwen3.5"]
    )

left, right = st.columns(2)

left.metric("Input tokens", 812)
right.metric("Output tokens", 240)

chat_tab, log_tab = st.tabs(["Chat", "Logs"])

with chat_tab:
    st.write("Chat goes here")

with log_tab:
    st.write("These are the logs.")

# Form: batches inputs and reruns only on submit
with st.form("ask_form"):
    q = st.text_area("Your question")

    if st.form_submit_button("Ask"):
        st.write("You asked:", q)

# Expander
with st.expander("Raw response"):
    st.json(raw)