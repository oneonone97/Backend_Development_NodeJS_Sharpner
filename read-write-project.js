const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        // Read messages from file
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading messages:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            // Split messages by newline character
            const messages = data.split('\n').filter(Boolean);

            // Write HTML response with form and messages
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html>');
            res.write('<head><title>My First Form</title></head>');
            res.write('<body>');
            res.write('<h1>Messages</h1>');
            res.write('<ul>');
            // Iterate through messages and display them as list items
            messages.forEach(message => {
                res.write(`<li>${message}</li>`);
            });
            res.write('</ul>');
            // Form to submit new message
            res.write('<form action="/message" method="POST">');
            res.write('<input type="text" name="message" placeholder="Enter your message">');
            res.write('<button type="submit">Submit</button>');
            res.write('</form>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // Extract message from request body
            const message = body.split('=')[1];
            // Append message to file
            fs.appendFile('message.txt', message + '\n', 'utf8', err => {
                if (err) {
                    console.error('Error appending message:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                // Redirect to homepage after adding message
                res.writeHead(302, { 'Location': '/' });
                res.end();
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
