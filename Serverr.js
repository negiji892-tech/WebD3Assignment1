// Basic HTTP Server using Node.js built-in http module
// Usage: node server.js
// Open http://localhost:3000 in your browser

const http = require('http');

const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;

    console.log(`Request received for URL: ${url}`);

    // Route handling based on the URL
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Welcome to the Smart Utility Toolkit</h1>');
        res.write('<p>This is the home page.</p>');
        res.write('<p>Try these routes:</p>');
        res.write('<ul><li><a href="/about">/about</a></li>');
        res.write('<li><a href="/contact">/contact</a></li></ul>');
        res.end();
        console.log('Sent welcome message for /');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>');
        res.write('<p>This is the Smart Utility Toolkit built with Node.js.</p>');
        res.write('<p>It contains a calculator, custom modules, a file manager, and a dice simulator.</p>');
        res.end();
        console.log('Sent about page for /about');
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contact Page</h1>');
        res.write('<p>Contact us at support@smarttools.com</p>');
        res.write('<p>Phone: 123-456-7890</p>');
        res.end();
        console.log('Sent contact page for /contact');
    } else {
        // Invalid route -> 404 error
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 - Page Not Found</h1>');
        res.write('<p>The page you requested does not exist.</p>');
        res.end();
        console.log(`Sent 404 error for invalid route: ${url}`);
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server.');
});
