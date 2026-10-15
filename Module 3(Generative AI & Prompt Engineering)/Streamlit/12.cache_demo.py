import streamlit as st
import time


@st.cache_data(ttl=3600)
def slow_square(n: int) -> int:
    """Pretends to be expensive work."""
    time.sleep(3)
    return n * n


@st.cache_resource
def get_counter():
    """One shared object, reused across reruns."""
    return {"calls": 0}


st.title("Cache Demo")

n = st.number_input("Pick a number", 1, 100, 5)

if st.button("Calculate"):
    start = time.time()

    result = slow_square(n)

    elapsed = time.time() - start

    st.write(f"{n} squared is {result}")
    st.caption(f"Took {elapsed:.2f} seconds")


st.button(
    "Clear cache",
    on_click=st.cache_data.clear
)