import axios from 'axios';

export default {
  login: function (userdata) {
    return axios.post('/api/login', userdata);
  },
  signup: function (userdata) {
    console.log('hit');
    console.log(userdata);
    return axios.post('/api/signup', userdata);
  },
  camperreg: function (userdata) {
    return axios.post('/api/camperreg', userdata);
  },
  getUser: function (id) {
    return axios.get('/api/signup' + id);
  },

  getCamper: function (id) {
    return axios.get('/api/camperreg' + id);
  },
};
