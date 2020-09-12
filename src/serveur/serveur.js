//Imports
var express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const app = express();

//Cors Desactivation
app.use(function(req, res ,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Max-Age", "3600");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next();
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://DestruVD:dydy6040dydy@rentacar.ajm9k.gcp.mongodb.net/rentacar?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

var personSchema = mongoose.Schema({
    name: String,
    pseudo: String,
    email: String,
    surname: String,
    password: String
})

var Person = mongoose.model('person',personSchema)

var router = express.Router();

router.route('/')
    .get(function(req, res){
        Person.find(function(err, people){
            if(err){
                res.send(err)
            }
            res.send(people)
        });
    })
    .post(function(req,res){
        var person = new Person();
        person.name = req.body.name
        person.pseudo = req.body.pseudo
        person.email = req.body.email
        person.surname = req.body.surname
        person.password = req.body.password
        person.save(function(err){
            if(err){
                res.send(err)
            }
            res.send(console.log(person))
        });
    })
    app.use('/api',router)
    app.listen(port, function(){
        console.log('Listening on port ' +port)
    })
