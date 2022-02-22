//Require Express.js
var express = require('express');
const app = express();

var HTTP_PORT = process.env.PORT || 5000;

//Starting an App Server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT));
});

//Default Reponse for Any Other Request
app.use(function(req, res) {
    res.status(404).send('404 NOT FOUND')
});

//Defining Check Endpoint
app.get('/app/', (req, res) => {
    //Respond with Status 200
    res.statusCode = 200;
    //Respond with Status Message "OK"
    res.statusMessage = "OK";
    res.writeHead(res.statusCode, {'Content-Type': 'text/plain'});
    res.end(res.statusCode + ' ' + res.statusMessage);
});