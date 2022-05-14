const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


app.get('/' , (req, res) => {
    res.json({ hello: 'world'})
})



app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})
