const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Import uuid v4 correctly
const app = express();
app.use(express.json());

let data = [
    { id: uuidv4(), name: 'Bob' },
    { id: uuidv4(), name: 'Alice' },
];

const usr = {
    create(name) {
        const user = { id: uuidv4(), name }; // Use uuidv4 to generate a new UUID
        data.push(user);
        return user;
    },
    read(id) {
        if (id === 'all') return data;
        return data.find(user => user.id === id);
    },
    update(id, name) {
        const user = data.find(usr => usr.id === id);
        if (!user) return { status: 'User not found' };
        user.name = name;
        return user;
    },
    delete(id) {
        data = data.filter(user => user.id !== id);
        return { status: 'deleted', id };
    }
};

// Route to create a new user
app.post('/users/:name', (req, res) => {
    res.status(201).json(usr.create(req.params.name));
});

// Route to get user by ID or all users
app.get('/users/:id', (req, res) => {
    res.status(200).json(usr.read(req.params.id));
});

// Route to update user's name by ID
app.put('/users/:id/:name', (req, res) => {
    res.status(200).json(usr.update(req.params.id, req.params.name));
});

// Route to delete a user by ID
app.delete('/users/:id', (req, res) => {
    res.status(200).json(usr.delete(req.params.id));
});

// Update port to 3000 and add error handling for port in use
app.listen(3000, () => console.log('Web Server running on port 3000'));
