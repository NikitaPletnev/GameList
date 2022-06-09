const Users = [
    {
        name: 'player1',
        password: 'player1'
    },
    {
        name: 'player2',
        password: 'player2'
    }
]


const fs = require('fs');

const rawdata = fs.readFileSync('src/data/data.json');
const dataJson = JSON.parse(rawdata);

const express = require('express'),
    app = express();

const PORT = 3001

app.get("/api/games", (req, res) => {
    res.json({data: dataJson?.games || []});
});
app.get("/api/providers", (req, res) => {
    res.json({data: dataJson?.providers || []});
});
app.get("/api/groups", (req, res) => {
    res.json({data: dataJson?.groups || []});
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('/api/login', (req, res) => {
    const user = JSON.parse(req.query.user)
    if (Users.some(({name, password}) => name === user.name && password === user.password
    )) {
        res.json({message: 'logging succeed', user: user.name || '', logged: true});
    } else {
        res.json({message: 'logging failed', logged: false});
    }
})
