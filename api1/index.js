const express = require('express');
const axios = require('axios');

const PORT = 3003; // port
const app = express();

app.get('/api1', async (req, res) => {
	const response = await axios({
		method: 'GET',
		url: `http://api2-srv:3004/api2`,
	});
	res.status(200).json({
		titleApi1: 'i am api 1',
		titleApi2: `${response.data.title}`,
	});
});

app.listen(PORT, () => {
	console.log(`listening`);
});
