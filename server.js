const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const session = require('express-session');
const models = require('./models');

app.use(cookieParser())
app.use(session({
    secret: 'blippi',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 60000 * 60
    }

}))

app.use(express.json());
app.use(cors());



app.get('/' , (req, res) => {
    res.json({ hello: 'world'})
})

app.get('/location' , (req, res) => {
    res.json({})
})

app.post('/users', (req, res) => {
    res.json({})
})

app.post('/actvities', (req, res) => {
    res.json({})
})





app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})
