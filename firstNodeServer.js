const http = require('http');
const port = 4000;
const server = http.createServer((req, res) => {
    res.write('My Name is Rohan');
    res.end();
    console.log('My Name is Rohan');
});

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});

// Stop Running Server
// For Windows
// taskkill /F /IM node.exe
