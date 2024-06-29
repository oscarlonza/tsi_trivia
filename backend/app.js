import express from 'express';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const userdb = process.env.USERDB;
const passdb = process.env.PASSDB;
const hostdb = process.env.HOSTDB;
const namedb = process.env.NAMEDB;
const url = `mongodb+srv://${userdb}:${passdb}@${hostdb}/${namedb}`;

console.log(url);

try {
    await mongoose.connect(url);
    console.log(`Database connected`);
} catch (error) {
    console.log(`Error Database`, error);
}


app.listen(port, () => console.log(`Server is running on port ${port}`));
