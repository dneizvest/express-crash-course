const express = require('express');
const path = require(`path`);

const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active'
    },
]

app.get(`/api/members`, (req, res) => {
    res.json(members);
});

// Set static folder
app.use(express.static(path.join(__dirname, `public`)))

app.get(`/`, (req, res) =>{
    res.sendFile(path.join(__dirname, `public`, `index.html`));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
