const mongoose = require('mongoose')
const ck = require('ckey')

const DbConnection = async () => {
    try {
        await mongoose.connect(ck.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        console.log('Connexion à MongoDB réussie !')
    } catch (err) {
        console.log('Connexion à MongoDB échouée !')
    }
}

module.exports = DbConnection