import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
    if (!expectedError) {
        console.log('Loggin the error', error)
        toast("an unexpected error occure.")
    }
    return Promise.reject(error)
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}