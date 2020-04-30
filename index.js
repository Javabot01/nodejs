//jshint esversion:8
const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My App'
    });
});

app.listen(2000, () => {
    console.log('Server started on port 6000');

});

// const server = http.createServer((req, res) => {
//     res.write('Hello World');
//     res.end();
// })

// const port = 3000;

// server.listen(port, () => {
//     console.log("server started on port:", port);

// })
