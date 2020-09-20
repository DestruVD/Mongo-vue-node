const ck = require('ckey')
const express = require('express');
const User = require('../backend/models/UserModel.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken')

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
        console.log('test')
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
router.route('/users/:pseudo')
    .post(function(req,res){
        User.findOne({ pseudo: {$regex : new RegExp(req.body.pseudo, "i")} }, function(err,user){
            if(err){
                res.send(err)
            }else if(user==null){
                res.send("User doesn't exist !")
            }else{
                if(req.body.password == user.password){
                    const accessToken = jwt.sign(
                    {
                            id: user._id,
                        email: user.email,
                        name: user.name,
                        surname: user.surname,
                        password: user.password,
                        pseudo: user.pseudo
                    }, ck.ACCESS_TOKEN_SECRET)
                    res.json({ accessToken })
                }else{
                    res.send("Password wrong !")
                }
            }
        })
    })

router.route('/users/:authUser')
    .get(authenticateToken, function (req, res) {
        var userID = req.body.jwtToken
        res.send(userID)
    })

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader.replace('Bearer ', '')
    if (token == null) {
        return res.sendStatus(401)
    }
    const jwtToken = jwt.verify(token, ck.ACCESS_TOKEN_SECRET)
    res.send(jwtToken.id)
}

    app.use('/api',router)
    app.listen(port, function(){
        console.log('Listening on port ' +port)
    })
