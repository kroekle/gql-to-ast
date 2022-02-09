var { parse } = require('graphql');
var express = require('express');
var bodyParser = require('body-parser');

var port = 3333;

const app = express();
app.use(bodyParser.json())

app.post('/', function (req, res) {
    if (!req.body.query) {
        res.status(400)
        res.send("Need to provide query property as part of request body")
    }
    try {
        res.send(parse(req.body.query));
    } catch(err) {
        res.status(400)
        res.send(`Could not parse GraphQL document: ${err}`)
    }
})

app.listen(port, () => {          
    console.log(`Now listening on port ${port}`); 
});