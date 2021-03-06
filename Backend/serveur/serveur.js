//Déclaration
const ck = require('ckey')
const express = require('express');
const User = require('../models/UserModel.js')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken')
const corsDesactivation = require('./Modules/corsDesactivation')
const DbConnection = require('./mongoose/modules/DbConnection')
const authenticateToken = require('./Modules/authToken')

//Creation du router
var router = express.Router();

//Cors Desactivation
app.use(corsDesactivation)

//Config serveur
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//Database connection
DbConnection()

//Route user
router.route('/users')
    .get(function (req, res) {
        User.find(function (err, user) {
            if (err) {
                res.send(err)
            }
            res.send(user)
        });
    })
    .post(function (req, res) {
        const user = req.body.user
        var userModel = new User(user)
        userModel.save(function (err) {
            if (err) {
                console.log(err)
                res.send(err)
            }
            res.send("User added !")
        });
    })
router.route('/users/:pseudo')
    .post(function (req, res) {
        User.findOne({ pseudo: { $regex: new RegExp(req.body.pseudo, "i") } }, function (err, user) {
            if (err) {
                res.send(err)
            } else if (user == null) {
                res.send("User doesn't exist !")
            } else {
                if (req.body.password == user.password) {
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
                } else {
                    res.send("Password wrong !")
                }
            }
        })
    })

//Route d'authentification
router.route('/users/:authUser')
    .get(authenticateToken, function (req, res) {
        var userID = req.body.jwtToken
        res.send(userID)
    })

app.use('/api', router)
app.listen(port, function () {
    console.log('Listening on port ' + port)
})
