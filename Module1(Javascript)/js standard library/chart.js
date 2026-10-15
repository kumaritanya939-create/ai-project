new Chart("myChart", {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            label: "Sales",
            data: [10, 20, 15]
        }]
    }
});