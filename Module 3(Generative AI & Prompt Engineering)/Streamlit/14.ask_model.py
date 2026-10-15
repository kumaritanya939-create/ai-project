import streamlit as st
from openai import OpenAI

# Page title
st.title("Ask the Model")

# Create OpenAI client using the API key stored in Streamlit secrets
client = OpenAI(
    api_key=st.secrets["OPENAI_API_KEY"]
)

# Take the user's question
q = st.text_area("Your question")

# Select temperature
temp = st.slider(
    "Temperature",
    0.0,
    1.0,
    0.7
)

# Run the model when the user clicks Ask
if st.button("Ask") and q:

    # Show a loading message while the model is responding
    with st.spinner("Thinking..."):

        try:
            # Send the question to the OpenAI model
            resp = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "user",
                        "content": q
                    }
                ],
                temperature=temp,
                max_tokens=300
            )

            # Display the model's response
            st.write(resp.choices[0].message.content)

            # Display total tokens used
            st.caption(
                f"Tokens: {resp.usage.total_tokens}"
            )

        except Exception as e:
            # Display an error message if the API call fails
            st.error(f"Could not get an answer: {e}")