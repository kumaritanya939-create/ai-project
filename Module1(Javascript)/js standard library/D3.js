const data = [10, 20, 30, 40];

d3.select("body")
  .selectAll("p")
  .data(data)
  .enter()
  .append("p")
  .text(d => d);