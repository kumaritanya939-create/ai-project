import streamlit as st
from openai import OpenAI
from pypdf import PdfReader

# Create OpenAI client using the API key from Streamlit secrets
client = OpenAI(
    api_key=st.secrets["OPENAI_API_KEY"]
)

# Upload a document
up = st.file_uploader(
    "Upload a document",
    type=["txt", "md", "pdf"]
)

# Process the uploaded document
if up:

    # Check if the uploaded file is a PDF
    if up.type == "application/pdf":

        # Read all pages from the PDF
        pages = PdfReader(up).pages

        # Extract text from each page
        text = "\n".join(
            p.extract_text() or ""
            for p in pages
        )

    else:
        # Read TXT or Markdown files
        text = up.read().decode("utf-8")

    # Show the number of characters loaded
    st.success(
        f"Loaded {len(text)} characters"
    )

    # Ask a question about the document
    q = st.text_input("Ask about this document")

    # Send the question to the model
    if q:

        resp = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "Answer only from the document."
                },
                {
                    "role": "user",
                    "content": f"<doc>{text}</doc>\nQ: {q}"
                }
            ]
        )

        # Display the answer
        st.write(
            resp.choices[0].message.content
        )