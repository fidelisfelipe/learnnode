console.log('init server');

const http = require('http');
const server = http.createServer(function(req, resp){
    let html = `
    <html>
        <head>
            <meta charset="utf-8"><meta>
        </head>
        <body>
            <h1>Hello Node</h1>
        </body>
    </html>
    `;
    resp.end(html);
});

server.listen(3000);