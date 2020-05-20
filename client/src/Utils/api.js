
import axios from 'axios';

export default {
    signup: function (userdata) {
        return axios.post("/api/signup", userdata)

    },
    camperreg: function (userdata) {
        return axios.post("/api/camperreg", userdata)
    },
    getUser: function (id) {
        return axios.get("/api/signup" + id)
    },

    getCamper: function (id) {
        return axios.get("/api/camperreg" + id )
    }
}