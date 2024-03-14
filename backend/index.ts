import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors())
const PORT = 5000;


// Example route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});