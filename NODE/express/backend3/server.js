import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/about', (req, res) => {
    res.send('About Page');
});


app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
