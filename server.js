const express = require('express');
const router = express.Router();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

const models = require('./models');
const db = require('./models');


app.use(express.json());
app.use(cors());


app.get('/' , (req, res) => {
    res.json({ hello: 'world'})
})

app.get('/food', async (req, res) => {
    await db.Food.findAll({
        attributes:['id','brand', 'flavor', 'type', 'price', 'picture']
    }).then(data => {
        res.send(data)
    })
});

app.get('/dog', async (req, res) => {
    const dog = await db.Dog.findAll({
        model: db.Dog,
        attributes:['name']
    })
});

app.get('/ratings', async (req, res) => {
    await db.Reaction.findAll({
        include: [db.Dog, db.Food]
        
        // attributes:['id','name', 'DogId', 'FoodId']
    }).then(data => {
        res.send(data)
    })
});

app.post('/reaction/:dog_id/:food_id', async (req, res) => {
    const reaction = req.body.rating;
    const food_id = parseInt(req.params.food_id);
    const dog_id = parseInt(req.params.dog_id);
    await db.Reaction.findOrCreate({
        where: { name: reaction, DogId: dog_id, FoodId: food_id},
    }).then(data => {
        res.send(data)
    })
})

app.delete('/reaction/:reaction_id', async (req, res) => {
    const reaction_id = parseInt(req.params.reaction_id);
    let reaction = await db.Reaction.findOne({where: {id: reaction_id}}).catch(e => {
        console.log(e.message)
    })
    if(!reaction){
        console.log('no reaction found');
        
    } else {
        reaction.destroy(); 
        res.send('reaction deleted')
    }
    
})




app.listen(PORT , () => {
    console.log(`app started in port ${PORT}`)
})
