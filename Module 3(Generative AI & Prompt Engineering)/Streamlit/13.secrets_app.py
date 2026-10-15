# Import Streamlit
import streamlit as st

# Import OpenAI client
from openai import OpenAI


# Get the API key from Streamlit secrets
key = st.secrets["OPENAI_API_KEY"]


# Create the OpenAI client using the API key
client = OpenAI(api_key=key)


# Access nested secret values
st.write(st.secrets.db.host)