var express = require('express')

var app = express()

var wiki = require('./wiki.js');

app.use('/wiki', wiki);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
	console.log('Example app listening on port 3000')
})