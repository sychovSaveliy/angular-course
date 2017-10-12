let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 4101;
let $data = require('./routes/list');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var listHandler = (req, res) => {
    // console.log(req);
    $data.requestList(req)
        .then((response) => {
        res.json(response);
    });
}

app.get("/", (req, res) => res.json({ message: "Hello! Its API!" }));

app.get('/list', listHandler);
app.post('/list', listHandler);



app.listen(port);
console.log("Mock server listening on port " + port);

module.exports = { app };