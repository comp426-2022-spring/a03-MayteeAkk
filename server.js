//Import Functions
const { coinFlip, coinFlips, countFlips, flipACoin } = require('./modules/coin.js');

//Require Express.js
const express = require('express');
const app = express();

var port = 5000;

//Starting an App Server
const server = app.listen(port, () => {
    console.log("App listening on port %PORT%".replace("%PORT%", port));
});

app.get('/app', (req, res) => {
    res.status(200).end("OK");
    res.type("text/plain");
})

app.get('/app/echo/:number', (req, res) => {
    res.status(200).json({ "message": req.params.number });
})

//Defining Check Endpoint
app.get('/app/flip', (req, res) => {
    let flip = coinFlip();
    res.status(200).json({ "flip": flip })
})

app.get('/app/flips/:number', (req, res) => {
    const result = coinFlips(parseInt(req.params.number))
    const count = countFlips(result)
    res.status(200).json({"raw": result, "summary": count})
})

app.get('/app/flip/call/:call', (req, res) => {
    res.status(200).json(flipACoin(req.params.call))
})

//Default Reponse for Any Other Request
app.use(function(req, res) {
    res.status(404).end("Endpoint does not exist");
    res.type("text/plain");
});









