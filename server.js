import http from "http";
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => res.end("OK")).listen(PORT, '0.0.0.0');
