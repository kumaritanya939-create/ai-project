import streamlit as st
import pandas as pd

st.title("Report")

st.subheader("Detail")

st.write("*Bold text*, or any object")

st.markdown("- Item one\n- Item two")

st.code("print('hi')", language="python")

df = pd.DataFrame({
    "Name": ["Alice", "Bob", "Charlie"],
    "Score": [85, 92, 78]
})

st.dataframe(df)

st.metric("Tokens used", 1420, "+120")

st.json({"role": "user"})

st.success("Done")

st.warning("Slow")

st.error("Failed")