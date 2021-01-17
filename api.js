var http = require('http');
var cors = require('cors');
var express = require('express');

var app = express();
var router = express.Router();

app.use(cors());
app.use('/api', router);

router.route('/products-list').get((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([{
            id: "f47f8d54-e93a-439c-9db0-28502d34dff3",
            name: 'Car',
            price: 15999,
            quantity: 0
        },
        {
            id: "431bbf0c-6bde-40ad-9a22-af6606074a92",
            name: 'Jeans',
            price: 59,
            quantity: 0
        },
        {
            id: "805a9d1c-eb6b-460c-bf6f-627b91e8329c",
            name: 'Phone',
            price: 899,
            quantity: 0
        },
        {
            id: "36d292b6-67b4-4425-b695-e59f6ff8b4ac",
            name: 'Computer',
            price: 1099,
            quantity: 0
        },
        {
            id: "977f8877-a480-4eb0-be55-19297f7001a9",
            name: 'Book',
            price: 19,
            quantity: 0
        }
    ]));
});

var port = process.env.PORT || 8090;

app.listen(port);
console.log("API is runing at ", port)