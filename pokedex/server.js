const express    = require('express');
const app        = express();
const pokemon    = require('./models/pokemon.js');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


// INDEX
app.get('/', (req, res) => {

    res.render('index.ejs',  { data: pokemon });
});

// SHOW 
app.get('/:id', (req, res) => {
    let id = req.params.id;
    res.render('show.ejs', { data: pokemon[id] });
    });


app.listen(4000, ()=> console.log('server is running'))