import axios from 'axios';
export default {
    signup: function (userdata) {
        return axios.post("/api/signup", userdata)
    }
}