var http = require('http');
var cors = require('cors');
var products = require('./product.js');
var express = require('express');

var app = express();
var router = express.Router();

app.use(cors());
app.use('/api', router);

router.route('/products-list').get((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
});

var port = process.env.PORT || 8090;

app.listen(port);
console.log("API is runing at ", port)