const http = require('http');

const app = http.createServer(function(req, res) {
    console.log('Hello World!');

    res.write('Hello WOrld from server!');
    res.end();
});

app.listen(5000);