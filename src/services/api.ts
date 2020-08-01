import axios from 'axios';

const api = axios.create({
  baseURL: 'https://getstartednode-interested-quokka-qo.mybluemix.net/'
});

export default api;
