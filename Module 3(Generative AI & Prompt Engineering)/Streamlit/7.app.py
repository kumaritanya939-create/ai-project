import streamlit as st

count = 0

# Reset on every rerun
if st.button("Add one"):
    count = count + 1

st.write("Count is", count)