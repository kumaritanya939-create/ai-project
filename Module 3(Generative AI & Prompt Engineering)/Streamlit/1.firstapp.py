import streamlit as st

st.title("My First AI App")

name = st.text_input("Your name")

if name:
    st.write("Hello", name,"Good morning" "!")