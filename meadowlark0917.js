const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //default  200
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('about');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 not found');
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 not found');
});

app.listen(port, () => {
    console.log(`포트 ${port}`);
});
