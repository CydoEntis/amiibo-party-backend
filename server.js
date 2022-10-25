const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const errors = require('express-async-errors');
const cors = require('cors');
const path = require('path');

// Database connection
const connectToDB = require('./db/connect.js');

// Routers
const authRouter = require('./routes/auth.routes.js');
const amiiboRouter = require('./routes/amiibo.routes.js');

//Middleware
const notFoundMiddleware = require('./middleware/not-found.middleware.js');
const errorHandlerMiddleware = require('./middleware/error-handler.middleware.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/amiibos', amiiboRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectToDB(process.env.MONGO_URL);
		app.listen(port, () => {
			console.log(`Server is listening on port ${port}...`);
		});
	} catch (e) {
		console.log(e);
	}
};

start();
