import pandas as pd
import streamlit as st
import random

# Simulate some usage data for demonstration purposes
usage_data = []

for _ in range(10):
    usage_data.append({
        "turn": random.randint(1, 100),
        "model": random.choice(["gpt-4o-mini", "gpt-4o"]),
        "total": random.randint(100, 1000),
        "cost": round(random.uniform(0.01, 0.1), 3)
    })

# Create a DataFrame from the usage data
log = pd.DataFrame(usage_data)

# Create three columns for metrics
a, b, c = st.columns(3)

a.metric("Calls", len(log))
b.metric("Tokens", int(log.total.sum()))
c.metric("Cost", f"${log.cost.sum():.3f}")

# Display a line chart for token usage
st.line_chart(
    log,
    x="turn",
    y="total"
)

# Display a bar chart for cost by model
st.bar_chart(
    log,
    x="model",
    y="cost"
)

# Display the complete usage data
st.dataframe(
    log,
    use_container_width=True
)