import streamlit as st

print("script started")       # terminal only

n = st.slider("How many?", 1, 10, 3)

st.write("You picked", n)

print("script finished")      # terminal only