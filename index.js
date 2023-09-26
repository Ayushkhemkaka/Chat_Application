import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on URL http://localhost:${PORT}/`);
})

app.use('/',(req,res) => res.sendFile('./views/index.html', {root: __dirname}))