const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3007;


let items = [
    { id: 1,     name: 'Item 1' },
    { id: 2,     name: 'Item 2' }
];

// Create (POST): Add a new item
app.post('/items', (req, res) => {
    const { name } = req.body;
    const newItem = { id: items.length + 1, name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read (GET): Get all items
app.get('/items', (req, res) => {
    res.json(items);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;  // Update the item's name
    res.json(item);
});


// Delete (DELETE): Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
});



app.get('/', (req, res) => {
    res.send('Server is running bitch');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});