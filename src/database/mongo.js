
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://DestruVD:dydy6040dydy@rentacar.ajm9k.gcp.mongodb.net/rentacar?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(function(){
      console.log("test")
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));