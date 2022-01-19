import axios from 'axios'

// create an axios instance
export const service = axios.create({
    // baseURL: 'https://www.makeapie.com/', // url = base url + request1 url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60 * 60 * 1000 // request1 timeout
})





