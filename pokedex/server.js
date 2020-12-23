const express    = require('express');
const app        = express();
const Pokemon    = require('./models/pokemon.js');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


// INDEX
app.get('/', (req, res) => {

    res.render('index.ejs',  { data: Pokemon });
});


app.listen(4000, ()=> console.log('server is running'))