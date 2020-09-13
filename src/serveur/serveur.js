//Imports
var express = require('express');
const User = require('../backend/models/UserModel.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const app = express();

//Cors Desactivation
app.use(function(req, res ,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,append,delete,entries,foreach,get,has,keys,set,values,Authorization");
    res.header("Access-Control-Max-Age", "3600");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})
//Config serveur
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


//Database connection
mongoose.connect('mongodb+srv://DestruVD:dydy6040dydy@rentacar.ajm9k.gcp.mongodb.net/rentacar?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


var router = express.Router();

//Route creation
router.route('/users')
    .get(function(req, res){
        User.find(function(err, user){
            if(err){
                res.send(err)
            }
            res.send(user)
        });
    })
    .post(function(req,res){
        var user = new User();
        user.name = req.body.name
        user.pseudo = req.body.pseudo
        user.email = req.body.email
        user.surname = req.body.surname
        user.password = req.body.password
        user.save(function(err){
            if(err){
                res.send(err)
            }
            res.send("User added !")
        });
    })

    app.use('/api',router)
    app.listen(port, function(){
        console.log('Listening on port ' +port)
    })
