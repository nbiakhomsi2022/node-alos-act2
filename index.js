const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep clients
let clients = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//appel a la fonction de Edite un client 
var mavoiture = {id: "", name: ""};
var x, y;
x = mavoiture.id;     // x aura la valeur "id de client"
maFonction(mavoiture);
y = mavoiture.id;



//appel a la fonction de Ajouter un client 
var mavoiture = {id: "", name: ""};
var x, y;
x = mavoiture.id;     // x aura la valeur "id de client"
maFonction11(mavoiture);
y = mavoiture.id;



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));