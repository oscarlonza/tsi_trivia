import express from 'express';
import dbConnection from './database/db.js';
import mainRouter from './routes/mainRoute.js';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

await dbConnection();

app.use('/api', mainRouter);

app.all('*', (req, res) => res.status(404).json({ msg: 'Not found' }));

app.listen(port, () => console.log(`Server is running on port ${port}`));
