const axios = require('axios')
import store from '../../store/index'
const LoginRequest = async (credentials) => {
    try {
        const rep = await axios.post("http://localhost:3000/api/users/pseudo", credentials)
        const token = rep.data.accessToken
        localStorage.setItem('jwt', token)
        store.commit('retrieveToken', token)
    } catch (err) {
        console.log(err)
    }
}

export default LoginRequest