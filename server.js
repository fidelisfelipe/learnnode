console.log('init server');

const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('server rodando na porta 3000');
});
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

app.get('/', function(req, resp){
    resp.send(html);
});

app.get('/hello', function(req, resp){
    resp.send(html);
});