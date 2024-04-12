import axios from 'axios'

const http = axios.create({
    // baseURL: process.env.VUE_APP_URL_API
})

http.interceptors.response.use(r => {
    return r
})

http.interceptors.request.use((config) => {
    return config
})


export default http