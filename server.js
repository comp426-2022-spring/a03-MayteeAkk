const {coinFlip, coinFlips, countFlips, flipACoin} = require('./modules/coin.mjs');

//Require Express.js
var express = require("express");
const app = express();

const args = require('minimist')(process.argv.slice(2));
var HTTP_PORT = process.env.PORT || 5000;

//Starting an App Server
const server = app.listen(HTTP_PORT, () => {
    console.log("App listening on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//Default Reponse for Any Other Request
app.use(function (req, res) {
    res.status(404).send("404 NOT FOUND");
    res.type("text/plain");
});

//Defining Check Endpoint
app.get('/app/flip', (req, res) => {
    res.status(200).json({"flip": coinFlip()})
})

app.get('/app/flips/:number', (req, res) => {
    const result = coinFlips(parseInt(req.params.number))
    const count = countFlips(result)
    res.status(200).json({"raw": result, "summary": count})
})

app.get('/app/flip/call/:call', (req, res) => {
    res.status(200).json(flipACoin(req.params.call))
})

app.get('/app', (req, res) => {
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
    res.end(res.statusCode+ ' ' +res.statusMessage)
})


