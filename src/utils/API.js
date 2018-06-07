import axios from 'axios'

export default {
    getUsers: () => {
        return axios.get('/api/users')
    },
    createUser: userData => {
        return axios.post('/api/user', userData)
    }
}