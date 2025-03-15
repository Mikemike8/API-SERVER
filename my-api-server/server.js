const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3006;

app.get('/', (req, res) => {
    res.send('Server is running bitch');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});