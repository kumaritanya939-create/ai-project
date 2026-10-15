import streamlit as st

# Create the key once
if "count" not in st.session_state:
    st.session_state.count = 0

# Read and update the value
if st.button("Add one"):
    st.session_state.count += 1

st.write("Count is", st.session_state.count)