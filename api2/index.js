const express = require('express');

const PORT = 3004; // port
const app = express();

app.get('/api2', (req, res) => {
	res.status(200).json({
		title: 'i am api 2',
	});
});

app.listen(PORT, () => {
	console.log(`listening`);
});
