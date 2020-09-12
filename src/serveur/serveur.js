//Imports
var express = require('express');

//Instantiate serveur

var serveur = express();
serveur.use(function(req, res ,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next();
})

//Configure routes
serveur.get('/', function(req,res){
    res.setHeader('Content-Type','text/html')
    res.status(200).send('<h1>Bonjour</h1>');
});

//Launch serveur
serveur.listen(8080, function(){
    console.log('Serveur en écoute')
})