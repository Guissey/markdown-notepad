import './utils/dotenvConfig';
import express from 'express';
import path from 'path';
import initDatabase from './database/init';
import noteRouter from './endpoints/note';

const { DEV, PROD_SERVER_PORT, DEV_SERVER_PORT } = process.env;
if (!DEV_SERVER_PORT || !PROD_SERVER_PORT) {
  throw new Error('Error: server port variable is not set. Check .env file.');
}

const serverPort = (DEV === 'true')
  ? parseInt(DEV_SERVER_PORT)
  : parseInt(PROD_SERVER_PORT);

initDatabase();

const app = express();

// Serve frontend static files
app.use(express.static(path.resolve(__dirname, '../../frontend/dist')));

// Middlewares
app.use(express.json());

// Endpoints
app.use('/note', noteRouter);

app.listen(serverPort, () => {
  console.log(`Server started on port ${serverPort}.`);
});
