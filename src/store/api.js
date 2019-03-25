/* 
File Overview 
* Provides an easy API utility to be used throughout the app.
*/
import axios from 'axios'

export default {
  get(url) {
    return axios.get(url)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
    }
}
