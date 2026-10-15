const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>About Us</h1>");
        res.write("<p>Welcome to our About Us webpage.</p>");
        res.end();
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Hello from Node.js</h1>");
        res.end();
    }
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});